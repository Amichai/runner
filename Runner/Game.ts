/// <reference path="ball.ts" />
/// <reference path="runner.ts" />
/// <reference path="Background.ts" />
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
class Game {
    public fps: number;
    private count: number;
    constructor(ctx : any) {
        this.fps = 50;
        Game.prototype.ctx = ctx;
        Game.prototype.count = 0;
        Game.prototype.width = $('#canvas').attr('width');
        Game.prototype.height = $('#canvas').attr('height');

        Game.prototype.backgrounds = [];
        Game.prototype.backgrounds.push(
            new Background(ctx));
        Game.prototype.runner = new runner(ctx);
        Game.prototype.theball = new ball(ctx, Game.prototype.runner);
        document.onkeydown = checkKey;

        function checkKey(e) {
            e = e || window.event;
            // right arrow
            if (e.keyCode == '39') {
                Game.prototype.action1();
            }
                // left arrow
            else if (e.keyCode == '37') {
                Game.prototype.action2();
            }
        }
        setInterval(this.start, 1000 / this.fps);
    }

    private backgrounds: Background[];
    private runner: runner;
    private theball: ball;
    private ctx: any;
    private width: number;
    private height: number;

    public action1(): void {
        if (!Game.prototype.runner.canJump()) {
            return;
        }
        Game.prototype.runner.jump();
        Game.prototype.theball.runnerJumped();
    }

    public action2(): void {
        if (!Game.prototype.theball.canKick()) {
            return;
        }
        Game.prototype.runner.kick();
        Game.prototype.theball.kick();
    }

    private draw(): void {
        this.ctx.clearRect(0, 0, Game.prototype.width, Game.prototype.height)
        for (var i = 0; i < Game.prototype.backgrounds.length; i++) {
            Game.prototype.backgrounds[i].draw();
        }
        Game.prototype.runner.draw();
        Game.prototype.theball.draw();
    }

    private update(): void {
    }

    start(): void {
        Game.prototype.update();
        Game.prototype.draw();
    }
}