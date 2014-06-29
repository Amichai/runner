/// <reference path="PlatformBuilder.ts" />
/// <reference path="ball.ts" />
/// <reference path="runner.ts" />
/// <reference path="Background.ts" />
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
var Game = (function () {
    function Game(ctx) {
        this.fps = 50;
        Game.prototype.ctx = ctx;
        Game.prototype.count = 0;
        Game.prototype.width = $('#canvas').attr('width');
        Game.prototype.height = $('#canvas').attr('height');
        Game.prototype.backgrounds = [];
        Game.prototype.backgrounds.push(new Background(ctx));
        Game.prototype.runner = new runner(ctx);
        Game.prototype.theball = new ball(ctx, Game.prototype.runner);
        Game.prototype.platform = new platformBuilder(ctx);
function checkKey(e) {
            e = e || window.event;
            // right arrow
            if(e.keyCode == '39') {
                Game.prototype.action1();
            } else // left arrow
            if(e.keyCode == '37') {
                Game.prototype.action2();
            }
        }
        document.onkeydown = checkKey;
        setInterval(this.start, 1000 / this.fps);
    }
    Game.prototype.action1 = function () {
        if(!Game.prototype.runner.canJump()) {
            return;
        }
        Game.prototype.runner.jump();
        Game.prototype.theball.runnerJumped();
    };
    Game.prototype.action2 = function () {
        if(!Game.prototype.theball.canKick()) {
            return;
        }
        Game.prototype.runner.kick();
        Game.prototype.theball.kick();
    };
    Game.prototype.draw = function () {
        var l = Game.prototype.platform.getPlatformLevel();
        console.log('level: ' + l);
        this.ctx.clearRect(0, 0, Game.prototype.width, Game.prototype.height);
        for(var i = 0; i < Game.prototype.backgrounds.length; i++) {
            Game.prototype.backgrounds[i].draw();
        }
        Game.prototype.runner.draw(l);
        Game.prototype.theball.draw();
        Game.prototype.platform.draw();
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
