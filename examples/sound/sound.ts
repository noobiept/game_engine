import { Game, makeButton, runOnLoad } from "../shared";

runOnLoad(function () {
    Game.init({ container: document.body, width: 400, height: 400 });

    const preload = new Game.Preload({ saveGlobal: true });

    preload.addEventListener("complete", start);
    preload.load("music", "../assets/sounds/scumm_bar.ogg");
});

function start() {
    const buffer = Game.Preload.get("music");

    // the SoundInstance returned by Game.Sound.play() lets us control the playback
    let music: ReturnType<typeof Game.Sound.play> = null;
    let volume = 0.5;

    const status = new Game.Text({
        x: 200,
        y: 30,
        textAlign: "center",
        fontSize: 14,
        text: "press 'Play' to start the looping music",
    });
    Game.addElement(status);

    function refresh() {
        const state = music && music.playing ? "playing" : "stopped / paused";
        status.text = `${state}   (volume ${volume.toFixed(1)})`;
    }

    makeButton(200, 90, "Play / Restart", function () {
        music?.stop();
        music = Game.Sound.play(buffer, { loop: true, volume: volume });
        refresh();
    });

    makeButton(200, 135, "Pause", function () {
        music?.pause();
        refresh();
    });

    makeButton(200, 180, "Resume", function () {
        music?.resume();
        refresh();
    });

    makeButton(200, 225, "Stop", function () {
        music?.stop();
        refresh();
    });

    makeButton(200, 270, "Volume -", function () {
        volume = Math.max(0, Math.round((volume - 0.1) * 10) / 10);

        if (music) {
            music.volume = volume;
        }

        refresh();
    });

    makeButton(200, 315, "Volume +", function () {
        volume = Math.min(1, Math.round((volume + 0.1) * 10) / 10);

        if (music) {
            music.volume = volume;
        }

        refresh();
    });
}
