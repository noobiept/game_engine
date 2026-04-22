(function (window) {
    class Square extends Game.Rectangle {
        constructor(args) {
            if (typeof args === "undefined") {
                args = {};
            }

            args.width = Square.SIZE;
            args.height = Square.SIZE;
            args.color = "blue";

            super(args);

            Game.addElement(this);
        }
    }

    Square.SIZE = 20;

    window.Square = Square;
})(window);
