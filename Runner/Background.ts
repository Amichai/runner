class Background {
    constructor(ctx : any) {
        this.ctx = ctx;
        this.count = 0;
        Background.img = new Image();
        Background.img.src = 'Content/background1.jpg';
        this.sourceWidth = 13759;
        this.sourceHeight = 1080;

        this.width = $('#canvas').attr('width');
        this.height = $('#canvas').attr('height');
        this.stepSize = 10;
    }

    ctx: any;
    count: number;
    width: number;
    height: number;
    stepSize: number;
    static img: any;
    sourceWidth: number;
    sourceHeight: number;


    draw(): void {
        var clipX = this.stepSize * this.count++;
        if (clipX > this.sourceWidth - this.width) {
            clipX -= this.sourceWidth - this.width;
            this.count = 0;
        }
        this.ctx.drawImage(Background.img, clipX, 0,
             this.width * 2, this.sourceHeight,
             0, 0, this.width, this.height);
        }
}

