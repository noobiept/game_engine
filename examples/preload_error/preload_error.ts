import { Game, runOnLoad } from "../shared";

runOnLoad(async function () {
    Game.init({ container: document.body, width: 400, height: 400 });

    const preload = new Game.Preload();
    const doesntExist = "doesnt_exist.png"; // we'll try to load a file that doesn't exist

    // the `optional` files don't fail the promise when they can't be loaded
    const manifest = [
        { id: "one", path: "one.png" },
        { id: "two", path: doesntExist, optional: true },
        { id: "three", path: "three.png" },
        { id: "four", path: "four.png" },
        { id: "five", path: doesntExist, optional: true },
        { id: "six", path: "six.png" },
        { id: "seven", path: "seven.png" },
        { id: "eight", path: doesntExist },
    ];

    let loaded: string[];

    try {
        const data = await preload.loadManifest(manifest, "../assets/images/");

        loaded = data.loadedIds;
    } catch (error) {
        if (!(error instanceof Game.PreloadError)) {
            throw error;
        }

        // only "eight" fails the promise (the other files that failed are optional)
        console.log("Failed to load: " + error.failedIds.join(" "));
        console.log(
            "All the files that failed: " + error.data.failedIds.join(" "),
        );

        loaded = error.data.loadedIds;
    }

    // add the images that were successfully loaded
    for (let a = 0; a < loaded.length; a++) {
        const image = preload.getImage(loaded[a]);

        if (!image) {
            continue;
        }

        const bitmap = new Game.Bitmap({
            x: 20 + a * 50,
            y: 20 + a * 50,
            image: image,
        });
        Game.addElement(bitmap);
    }
});
