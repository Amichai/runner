class ball {
    constructor(ctx: any) {
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
        this.ax = .5 / 3;
        this.ay = -2 / 3;

        this.restingX = true;
        this.restingY = true;
        this.kickCount = 0;

        this.velocityUnit = 4;
    }

    ctx: any;
    img: any;
    xPos: number;
    yPos: number;
    count: number;
    ballWidth: number;
    restingX: bool;
    restingY: bool;

    initialX: number;
    initialY: number;

    vx: number;
    vy: number;
    ax: number;
    ay: number;
    kickCount: number;
    velocityUnit: number;

    draw(): void {
        this.ctx.save();
        this.ctx.translate(this.xPos, this.yPos);
        this.ctx.rotate(this.count++ * 6.5 * Math.PI / 180);
        this.ctx.drawImage(this.img, -this.ballWidth / 2, -this.ballWidth /2, this.ballWidth, this.ballWidth);
        this.ctx.restore();
        if (!this.restingX && !this.restingY) {
            //this.xPos = this.xPos + this.kickCount * this.vx - this.ax * (this.kickCount * this.kickCount);

            this.xPos = this.xPos + this.kickCount * this.vx - this.ax * (this.kickCount * this.kickCount);

        } else if (!this.restingX) {
            this.xPos = this.xPos - this.kickCount;
        }
        if (!this.restingY) {
            this.yPos = this.yPos + this.kickCount * this.vy - this.ay * (this.kickCount * this.kickCount);
        }
        this.kickCount++; 
        if (this.xPos < this.initialX) {
            this.restingX = true;
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
        this.vx = this.velocityUnit;
        this.vy = -this.velocityUnit * 2;
        this.kickCount = 0;
    }
}