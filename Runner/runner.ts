class runner {
    constructor(ctx: any) {
        this.ctx = ctx;
        this.count = 0;

        this.stepSize = 2;
        this.width = 236;
        this.height = 220;

        this.frames = [];
        for (var i = 1; i < 48; i++) {
            var img = new Image();
            var asString = i.toString();
            if (asString.length == 1) {
                asString = '0' + asString;
            }
            var path = 'Content/running/Symbol 100' + asString + '.png';
            img.src = path;
            this.frames.push(img);
        }
    }

    ctx: any;
    stepSize: number;
    count: number;
    width: number;
    height: number;

    frames: any[];

    draw(): void {

        var idx = (this.count++ % 47);
        var a = 550 / 300.0;
    //    this.ctx.drawImage(this.frames[idx], 0, 0,
    //this.width ,
    //this.height,
    // 0, 0,
    // this.width / a * .3,
    //this.height * .3
    //);


        this.ctx.drawImage(this.frames[idx], 0, 0,
            100, 100
      );
    }
}