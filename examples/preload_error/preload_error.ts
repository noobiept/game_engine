import { Game, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init({ container: document.body, width: 400, height: 400 });

    const preload = new Game.Preload();
    const doesntExist = "doesnt_exist.png"; // we'll try to load a file that doesn't exist

    const manifest = [
        { id: "one", path: "one.png" },
        { id: "two", path: doesntExist },
        { id: "three", path: "three.png" },
        { id: "four", path: "four.png" },
        { id: "five", path: doesntExist },
        { id: "six", path: "six.png" },
        { id: "seven", path: "seven.png" },
        { id: "eight", path: doesntExist },
    ];

    preload.addEventListener("complete", function (data) {
        const loaded = data.loadedIds;
        const failed = data.failedIds;

        // add the images that were successfully loaded
        for (let a = 0; a < loaded.length; a++) {
            const image = preload.get(loaded[a]);
            const bitmap = new Game.Bitmap({
                x: 20 + a * 50,
                y: 20 + a * 50,
                image: image,
            });
            Game.addElement(bitmap);
        }

        // list the ids of the elements that failed to load
        console.log("Failed to load: " + failed.join(" "));
    });
    preload.loadManifest(manifest, "../assets/images/");
});
