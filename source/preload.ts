import { EventDispatcher, EventDispatcherArgs } from "./event_dispatcher";
import * as Utilities from "@drk4/utilities";
import * as Sound from "./sound";

export interface PreloadArgs extends EventDispatcherArgs {
    saveGlobal?: boolean; // save to global 'data' object, or to this object's 'data'
    timeout?: number; // time (in seconds) a file can take to load, before it fails (default 0, no limit)
}

/**
 * Data of the `error` event (only the properties that apply to the failure are set).
 */
export interface PreloadErrorData {
    id: string;
    event?: ProgressEvent; // a network error, or the request took longer than the `timeout`
    status?: number; // the response had an error status (404, 500, etc)
    error?: unknown; // the file couldn't be parsed (invalid json) or decoded (images, audio)
}

/**
 * Data of the `complete` event.
 */
export interface PreloadCompleteData {
    failedIds: string[]; // the files that couldn't be loaded (check it before starting the game)
    loadedIds: string[];
}

/**
 * A file to load with `loadManifest()`.
 */
export interface PreloadManifestEntry {
    id: string;
    path: string;
    optional?: boolean; // the game can run without it (the music, for example), so it doesn't fail the `loadManifest()` promise
}

/**
 * The error `loadManifest()` rejects with, when files that aren't `optional` fail to load.
 */
export class PreloadError extends Error {
    failedIds: string[]; // the files of the manifest that failed and aren't optional
    data: PreloadCompleteData; // the data of the `complete` event (all the files that loaded/failed)

    constructor(failedIds: string[], data: PreloadCompleteData) {
        super(`Couldn't load: ${failedIds.join(", ")}.`);

        this.name = "PreloadError";
        this.failedIds = failedIds;
        this.data = data;
    }
}

interface PendingManifest {
    required: Set<string>;
    resolve: (data: PreloadCompleteData) => void;
    reject: (error: PreloadError) => void;
}

function asImage(data: unknown) {
    return typeof HTMLImageElement !== "undefined" &&
        data instanceof HTMLImageElement
        ? data
        : undefined;
}

function asAudio(data: unknown) {
    return typeof AudioBuffer !== "undefined" && data instanceof AudioBuffer
        ? data
        : undefined;
}

function asText(data: unknown) {
    return typeof data === "string" ? data : undefined;
}

/**
 * The events of `Preload`, and the data their listeners get.
 */
export interface PreloadEvents {
    complete: PreloadCompleteData;
    error: PreloadErrorData;
    abort: { id: string; event: ProgressEvent };
    progress: number; // the percentage of all the files being loaded (0 to 100)
    fileload: { id: string; data: any };
}

// the 2xx statuses, 304 (from the cache) and 0 (the `file://` protocol)
function isSuccessStatus(status: number) {
    return (status >= 200 && status < 300) || status === 304 || status === 0;
}

/**
 * Basic Usage:
 *
 *     const preload = new Game.Preload({ saveGlobal: true });
 *
 *     try {
 *         await preload.loadManifest([
 *             { id: 'ship', path: 'ship.png' },
 *             { id: 'music', path: 'music.ogg', optional: true }, // the game can run without it
 *         ]);
 *     } catch ( error ) {
 *         // `error.failedIds` has the files that couldn't be loaded (and aren't optional)
 *     }
 *
 *     const ship = new Game.Bitmap({ image: Game.Preload.getImage( 'ship' ) });
 *
 *         // or file by file, with the events
 *     preload.addEventListener( 'complete', function( data ) {
 *         if ( data.failedIds.length > 0 ) {
 *             // show an error, instead of starting the game with missing files
 *         }
 *     });
 *     preload.load( 'id', 'path_to_file.png' );
 *
 * Get the files with `getImage()`, `getAudio()`, `getJson()` or `getText()` (on the object, or on `Game.Preload` with
 * `saveGlobal`). They return `undefined` for a file that wasn't loaded (or is of another type), which TypeScript
 * makes you check. `get()` returns `any`.
 *
 * Events (the listeners are typed, see `PreloadEvents`):
 *
 * - `complete` -- `listener( data: PreloadCompleteData );`
 *   Dispatched once all the files were dealt with (loaded or failed). More files can be loaded from the listener.
 * - `error` -- `listener( data: PreloadErrorData );`
 *   Dispatched for every file that fails to load: network errors and timeouts (`event`), error statuses (`status`), and files that
 *   can't be parsed or decoded (`error`).
 * - `abort` -- `listener( data: { id: string; event: ProgressEvent; } );`
 * - `progress` -- `listener( progress: number );`
 * - `fileload` -- `listener( data: { id: string; data: Object; } );`
 *
 * The `path` is used as is, so don't build it from untrusted data (a url parameter, user input, etc) without validating it first.
 *
 * Examples -- `clone`, `minesweeper`, `multiple_canvas`, `preload`, `sprite`
 */
export class Preload extends EventDispatcher {
    saveGlobal: boolean;
    timeout: number; // time (in seconds) a file can take to load (0 is no limit)
    protected _data: Record<string, any>;
    protected _total_items: number;
    protected _loaded_items: number;
    protected _failed_ids: string[]; // list of the ids that failed to load
    protected _loaded_ids: string[]; // list of the ids that were successfully loaded
    protected _file_progress: Map<string, number>; // progress (0 to 1) of the files that are loading
    protected _pending_manifests: PendingManifest[]; // the `loadManifest()` promises waiting for the files to load

    constructor(args?: PreloadArgs) {
        super(args);

        let saveGlobal = false;
        let timeout = 0;

        if (typeof args !== "undefined") {
            if (Utilities.isBoolean(args.saveGlobal)) {
                saveGlobal = args.saveGlobal;
            }

            if (Utilities.isNumber(args.timeout) && args.timeout > 0) {
                timeout = args.timeout;
            }
        }

        this._total_items = 0;
        this._loaded_items = 0;
        this.saveGlobal = saveGlobal;
        this.timeout = timeout;
        this._data = Object.create(null);
        this._failed_ids = [];
        this._loaded_ids = [];
        this._file_progress = new Map();
        this._pending_manifests = [];
    }

    /**
     * An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.
     *
     * @param id The id of the loaded element.
     * @param data Its data.
     */
    protected _loaded(id: string, data: any) {
        if (this.saveGlobal) {
            Preload.DATA[id] = data;
        } else {
            this._data[id] = data;
        }

        // the file still counts as dealt with when a listener throws
        try {
            this.dispatchEvent("fileload", { id: id, data: data });
        } finally {
            this._file_progress.delete(id);
            this._loaded_items++;
            this._loaded_ids.push(id);

            if (this._loaded_items >= this._total_items) {
                this._loading_complete();
            }
        }
    }

    /**
     * Add a listener to one of the events (see `PreloadEvents` for the data each one gets).
     *
     * @return If it was successfully added (`false` when it isn't a function, or was already added).
     */
    override addEventListener<K extends keyof PreloadEvents>(
        type: K,
        listener: (data: PreloadEvents[K]) => any,
    ) {
        return super.addEventListener(type, listener);
    }

    /**
     * Remove a listener of an event, or all its listeners (when `listener` isn't given).
     *
     * @return If it was successfully removed.
     */
    override removeEventListener<K extends keyof PreloadEvents>(
        type: K,
        listener?: (data: PreloadEvents[K]) => any,
    ) {
        return super.removeEventListener(type, listener);
    }

    /**
     * An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.
     */
    protected _failed_to_load(id: string) {
        this._file_progress.delete(id);
        this._loaded_items++;
        this._failed_ids.push(id);

        if (this._loaded_items >= this._total_items) {
            this._loading_complete();
        }
    }

    /**
     * All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.
     */
    protected _loading_complete() {
        const data: PreloadCompleteData = {
            failedIds: this._failed_ids,
            loadedIds: this._loaded_ids,
        };

        // reset before dispatching, so the listener can load more files
        this._failed_ids = [];
        this._loaded_ids = [];
        this._loaded_items = 0;
        this._total_items = 0;
        this._file_progress.clear();

        // settle the `loadManifest()` promises first (a `complete` listener that throws would stop the dispatch)
        for (const pending of this._pending_manifests.splice(0)) {
            const failed = data.failedIds.filter((id) =>
                pending.required.has(id),
            );

            if (failed.length > 0) {
                pending.reject(new PreloadError(failed, data));
            } else {
                pending.resolve(data);
            }
        }

        this.dispatchEvent("complete", data);
    }

    /**
     * Dispatch the `error` event, and count the file as failed (even if a listener throws).
     *
     * @param id The id of the element.
     * @param details What went wrong.
     */
    protected _on_error(id: string, details: Omit<PreloadErrorData, "id">) {
        try {
            this.dispatchEvent("error", { id: id, ...details });
        } finally {
            this._failed_to_load(id);
        }
    }

    /**
     * Dispatch the `abort` event, and count the file as failed (even if a listener throws).
     *
     * @param event The event to dispatch.
     * @param id The id of the element.
     */
    protected _on_abort(event: ProgressEvent<EventTarget>, id: string) {
        try {
            this.dispatchEvent("abort", { event: event, id: id });
        } finally {
            this._failed_to_load(id);
        }
    }

    /**
     * Dispatch the current progress percentage (of all the files being loaded).
     *
     * @param event The event that was triggered.
     * @param id The id of the file.
     */
    protected _on_progress(event: ProgressEvent, id: string) {
        if (this._total_items === 0) {
            return;
        }

        this._file_progress.set(
            id,
            event.lengthComputable && event.total > 0
                ? event.loaded / event.total
                : 0,
        );

        let filesProgress = 0;

        for (const value of this._file_progress.values()) {
            filesProgress += value;
        }

        const progress = Math.round(
            ((filesProgress + this._loaded_items) / this._total_items) * 100,
        );

        this.dispatchEvent("progress", progress);
    }

    /**
     * Load a file.
     *
     * @param id The id to be used later on to get the element.
     * @param path Path to the file.
     * @param typeId Type of the file to load. If not provided then it will try to determine the type from the file extension.
     */
    load(id: string, path: string, typeId?: Preload.TYPES) {
        let type: Preload.FileType | null;

        if (typeof typeId === "undefined") {
            type = Preload.getType(path);
        } else {
            type = Preload.TYPES[typeId] as Preload.FileType;
        }

        if (!type) {
            throw new Error("Invalid file type.");
        }

        this._total_items++;

        const request = new XMLHttpRequest();

        request.open("get", path, true);
        request.responseType = Preload.RESPONSE_TYPE[type];
        request.timeout = this.timeout * 1000;

        // add the request events
        request.addEventListener("error", (event) => {
            this._on_error(id, { event: event });
        });
        request.addEventListener("timeout", (event) => {
            this._on_error(id, { event: event });
        });
        request.addEventListener("abort", (event) => {
            this._on_abort(event, id);
        });
        request.addEventListener("progress", (event) => {
            this._on_progress(event, id);
        });
        request.addEventListener(
            "load",
            () => {
                // failed to load
                if (!isSuccessStatus(request.status)) {
                    this._on_error(id, { status: request.status });
                    return;
                }

                let response = request.response;

                if (type === "image") {
                    const image = new Image();
                    const imageUrl = window.URL.createObjectURL(response);

                    image.onerror = () => {
                        window.URL.revokeObjectURL(imageUrl);
                        this._on_error(id, {
                            error: new Error("The image couldn't be decoded."),
                        });
                    };
                    image.onload = () => {
                        window.URL.revokeObjectURL(imageUrl);
                        this._loaded(id, image);
                    };
                    image.src = imageUrl;
                } else if (type === "json") {
                    // for the browsers that don't return the object, but a string instead
                    if (typeof response === "string") {
                        try {
                            response = JSON.parse(response);
                        } catch (error) {
                            this._on_error(id, { error: error });
                            return;
                        }
                    }

                    // the browser gives `null` when the content isn't valid json
                    if (response === null) {
                        this._on_error(id, {
                            error: new Error("The file isn't valid json."),
                        });
                        return;
                    }

                    this._loaded(id, response);
                } else if (type === "audio") {
                    const isAvailable = Sound.decodeAudio(
                        response,
                        (audioBuffer: AudioBuffer) => {
                            this._loaded(id, audioBuffer);
                        },
                        (error: DOMException) => {
                            this._on_error(id, { error: error });
                        },
                    );

                    // in case the 'decodeAudio()' call wasn't possible
                    if (!isAvailable) {
                        this._on_error(id, {
                            error: new Error("Audio isn't supported."),
                        });
                    }
                } else {
                    this._loaded(id, response);
                }
            },
            false,
        );

        request.send();
    }

    /**
     * Load several files.
     *
     * The returned promise resolves once all the files were dealt with (like the `complete` event, with its data), or
     * rejects with a `PreloadError` when any file that isn't `optional` fails to load. Awaiting it makes a missing
     * file an error, instead of a game that starts without it. The events are dispatched as well, and a game that
     * uses them instead can ignore the promise (its rejection isn't reported as unhandled).
     *
     * @param manifest Has the information about the files (`optional` ones don't fail the promise).
     * @param basePath Base path for all the files in the manifest.
     */
    loadManifest(manifest: PreloadManifestEntry[], basePath?: string) {
        const length = manifest.length;

        if (typeof basePath === "undefined") {
            basePath = "";
        }

        // check all the files first, so an invalid one doesn't leave the others loading
        for (const file of manifest) {
            if (!Preload.getType(basePath + file.path)) {
                throw new Error(`Invalid file type: ${file.path}`);
            }
        }

        // nothing to wait for (an empty manifest, with no other files loading)
        if (length === 0 && this._total_items === 0) {
            return Promise.resolve<PreloadCompleteData>({
                failedIds: [],
                loadedIds: [],
            });
        }

        const promise = new Promise<PreloadCompleteData>((resolve, reject) => {
            const required = new Set(
                manifest
                    .filter((file) => !file.optional)
                    .map((file) => file.id),
            );

            this._pending_manifests.push({ required, resolve, reject });
        });

        // a game that uses the events instead (and doesn't await it) doesn't get an unhandled rejection, but an
        // `await` still throws
        promise.catch(() => {});

        for (let a = 0; a < length; a++) {
            const file = manifest[a];

            this.load(file.id, basePath + file.path);
        }

        return promise;
    }

    /**
     * Get a previously loaded file (as `any`). See `getImage()`, `getAudio()`, `getJson()` and `getText()` for typed
     * versions.
     *
     * @param id The id of the file.
     */
    get(id: string) {
        return this._data[id];
    }

    /**
     * Get a loaded image, or `undefined` when there isn't one with that id.
     */
    getImage(id: string) {
        return asImage(this._data[id]);
    }

    /**
     * Get a loaded audio file (decoded), or `undefined` when there isn't one with that id.
     */
    getAudio(id: string) {
        return asAudio(this._data[id]);
    }

    /**
     * Get a loaded text file, or `undefined` when there isn't one with that id.
     */
    getText(id: string) {
        return asText(this._data[id]);
    }

    /**
     * Get a loaded json file (parsed), or `undefined` when there isn't a file with that id. The data isn't checked
     * against `T`.
     */
    getJson<T = unknown>(id: string): T | undefined {
        return this._data[id] as T | undefined;
    }
}

export namespace Preload {
    // supported file types
    export enum TYPES {
        image,
        json,
        text,
        audio,
    }

    // file extensions of each type
    export type FileType = "image" | "json" | "text" | "audio";

    export const EXTENSIONS: Record<FileType, string[]> = {
        image: ["png", "jpg", "jpeg"],
        json: ["json"],
        text: ["txt"],
        audio: ["ogg", "mp3"],
    };

    // XMLHttpRequest response type of each file type
    export const RESPONSE_TYPE: Record<FileType, XMLHttpRequestResponseType> = {
        image: "blob",
        json: "json",
        text: "text",
        audio: "arraybuffer",
    };

    // key is the 'id'
    // value is the 'data'
    // (without a prototype, so ids like `__proto__` are plain keys)
    export const DATA: Record<string, any> = Object.create(null);

    /**
     * Get an element that was saved in the global `DATA` object.
     *
     * @param id The id of the element we're retrieving.
     * @return The preloaded element.
     */
    export function get(id: string) {
        return DATA[id];
    }

    /**
     * Get a loaded image (saved in the global `DATA` object), or `undefined` when there isn't one with that id.
     */
    export function getImage(id: string) {
        return asImage(DATA[id]);
    }

    /**
     * Get a loaded audio file (decoded, saved in the global `DATA` object), or `undefined` when there isn't one with
     * that id.
     */
    export function getAudio(id: string) {
        return asAudio(DATA[id]);
    }

    /**
     * Get a loaded text file (saved in the global `DATA` object), or `undefined` when there isn't one with that id.
     */
    export function getText(id: string) {
        return asText(DATA[id]);
    }

    /**
     * Get a loaded json file (parsed, saved in the global `DATA` object), or `undefined` when there isn't a file with
     * that id. The data isn't checked against `T`.
     */
    export function getJson<T = unknown>(id: string): T | undefined {
        return DATA[id] as T | undefined;
    }

    /**
     * Determine the type of a file based on its extension (ignoring the case, and the url's query/hash).
     *
     * @param file The file name.
     * @return The file type.
     */
    export function getType(file: string): FileType | null {
        const name = file.split(/[?#]/)[0];
        const dot = name.lastIndexOf(".");

        // no extension (a dot before the last `/` is part of a folder name)
        if (dot < 0 || dot < name.lastIndexOf("/")) {
            return null;
        }

        const extension = name.slice(dot + 1).toLowerCase();

        for (const type in EXTENSIONS) {
            const fileType = type as FileType;

            if (Object.prototype.hasOwnProperty.call(EXTENSIONS, type)) {
                if (EXTENSIONS[fileType].indexOf(extension) >= 0) {
                    return fileType;
                }
            }
        }

        return null;
    }
}
