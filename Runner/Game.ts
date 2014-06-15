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
        setInterval(this.start, 1000 / this.fps);
        Game.prototype.width = $('#canvas').attr('width');
        Game.prototype.height = $('#canvas').attr('height');

        Game.prototype.backgrounds = [];
        Game.prototype.backgrounds.push(
            new Background(ctx));
        Game.prototype.runner = new runner(ctx);
    }

    backgrounds: Background[];
    runner: runner;
    ctx: any;
    width: number;
    height: number;

    private draw(): void {
        this.ctx.clearRect(0, 0, Game.prototype.width, Game.prototype.height)
        for (var i = 0; i < Game.prototype.backgrounds.length; i++) {
            Game.prototype.backgrounds[i].draw();
        }
        Game.prototype.runner.draw();
    }

    private update(): void {
    }

    start(): void {
        Game.prototype.update();
        Game.prototype.draw();
    }
}