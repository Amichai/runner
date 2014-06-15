/// <reference path="runner.ts" />
/// <reference path="Background.ts" />
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
var Game = (function () {
    function Game(ctx) {
        this.fps = 50;
        Game.prototype.ctx = ctx;
        Game.prototype.count = 0;
        setInterval(this.start, 1000 / this.fps);
        Game.prototype.width = $('#canvas').attr('width');
        Game.prototype.height = $('#canvas').attr('height');
        Game.prototype.backgrounds = [];
        Game.prototype.backgrounds.push(new Background(ctx));
        Game.prototype.runner = new runner(ctx);
    }
    Game.prototype.draw = function () {
        this.ctx.clearRect(0, 0, Game.prototype.width, Game.prototype.height);
        for(var i = 0; i < Game.prototype.backgrounds.length; i++) {
            Game.prototype.backgrounds[i].draw();
        }
        Game.prototype.runner.draw();
    };
    Game.prototype.update = function () {
    };
    Game.prototype.start = function () {
        Game.prototype.update();
        Game.prototype.draw();
    };
    return Game;
})();
//@ sourceMappingURL=Game.js.map
