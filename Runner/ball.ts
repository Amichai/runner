class ball {
    constructor(ctx: any, runner : runner) {
        this.ctx = ctx;
        var p = 'Content/soccer.png';
        this.img = new Image();
        this.img.src = p;
        this.initialX = 123;
        this.initialY = 378;
        this.xPos = this.initialX;
        this.yPos = this.initialY;
        this.count = 0;
        this.ballWidth = 36;

        this.vx = 0;
        this.vy = 0;
        this.ax = 2;
        this.ay = -2;
        this.runner = runner;

        this.restingX = true;
        this.restingY = true;
        this.kickCount = 0;

        this.velocityUnit = 4;
    }

    private runner: runner;
    private ctx: any;
    private img: any;
    private xPos: number;
    private yPos: number;
    private count: number;
    private ballWidth: number;
    private restingX: bool;
    private restingY: bool;

    initialX: number;
    initialY: number;

    vx: number;
    vy: number;
    ax: number;
    ay: number;
    kickCount: number;
    velocityUnit: number;

    public canKick(): bool {
        return this.restingX;
    }

    draw(): void {
        this.ctx.save();
        this.ctx.translate(this.xPos, this.yPos);
        this.ctx.rotate(this.count++ * 6.5 * Math.PI / 180);
        this.ctx.drawImage(this.img, -this.ballWidth / 2, -this.ballWidth /2, this.ballWidth, this.ballWidth);
        this.ctx.restore();

        this.xPos = this.xPos + this.vx;
        this.yPos = this.yPos + this.vy;

        if (!this.restingX && !this.restingY) {
           
        } else if (!this.restingX) {
            if (this.restingY) {
                this.xPos -= 14;
            }
        }
        if (!this.restingY) {
            this.vy = this.vy - this.ay;
        }
        this.kickCount++; 
        if (this.xPos < this.initialX && this.runner.canJump()) {
            this.restingX = true;
            this.vx = 0;
            this.xPos = this.initialX;
        }
        if (this.yPos > this.initialY) {
            this.restingY = true;
            this.yPos = this.initialY;
            this.kickCount = 0;
        }
    }

    runnerJumped(): void {
        this.kickCount = 0;
        this.restingX = false;
    }

    kick(): void {
        this.restingX = false;
        this.restingY = false;
        this.vx = this.velocityUnit * 2;
        this.vy = -this.velocityUnit * 4.5;
        this.kickCount = 0;
    }
}