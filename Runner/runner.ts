enum activity { jumping, running, kicking }


class runner {
    constructor(ctx: any) {
        this.ctx = ctx;
        this.count = 0;
        this.runnerActivity = activity.running;
        //this.width = 236;
        //this.height = 220;

        this.heightOffset = 0;
        this.walkingFrames = [];
        for (var i = 1; i < 48; i++) {
            var img = this.getFrame('Content/running/Symbol 100', i);
            this.walkingFrames.push(img);
        }

        this.jumpingFrames = [];
        for (var i = 1; i < 35; i++) {
            var img = this.getFrame('Content/jumping/Symbol 100', i);
            this.jumpingFrames.push(img);
        }

        this.kickingFrames = [];
        for (var i = 1; i < 16; i++) {
            var img = this.getFrame('Content/kicking/Symbol 100', i);
            this.kickingFrames.push(img);
        }

        //this.isJumping = false;
    }


    private getFrame(pathBase: string, idx: number): any {
        var img = new Image();
        var asString = idx.toString();
        if (asString.length == 1) {
            asString = '0' + asString;
        }
        var path = pathBase + asString + '.png';
        img.src = path;
        return img;
    }


    runnerActivity: activity;


    ctx: any;
    count: number;

    public getFootPosX(): number {
        return 100;
    }

    public getFootPosY(): number {
        return 400 - this.heightOffset;
    }

    public canJump(): bool {
        return this.heightOffset == 0;
    }

    walkingFrames: any[];
    jumpingFrames: any[];
    kickingFrames: any[];

    heightOffset: number;

    jump(): void {
        this.runnerActivity = activity.jumping;
        this.count = 0;
    }

    kick(): void {
        this.runnerActivity = activity.kicking;
        this.count = 0;
    }

    draw(): void {
        if (this.runnerActivity == activity.running) {
            var idx = (this.count++ % 47);
            this.ctx.drawImage(this.walkingFrames[idx], 0, 300,
                100, 100
          );
        } else if (this.runnerActivity == activity.jumping) {
            var idx = (this.count++);

            this.heightOffset = (34 * idx - (idx * idx)) / 2;
            this.ctx.drawImage(this.jumpingFrames[idx], 0, 300 - this.heightOffset,
                130, 130
          );
            if (idx == 33) {
                this.runnerActivity = activity.running;
                this.heightOffset = 0;
                this.count = 0;
            }
        } else if (this.runnerActivity == activity.kicking) {
            var idx = (this.count++);
            this.ctx.drawImage(this.kickingFrames[idx], 0, 300,
                100, 100
          );
            if (idx == 14) {
                this.runnerActivity = activity.running;
                this.count = 0;
            }
        }
    }
}

