
class platformBuilder {
    constructor(ctx: any) {
        this.ctx = ctx;
        this.path = 'Content/reanimations/';
        this.tiles = [];
        this.tiles.push(new tile(this.path + 'fan.png', 576, 144, 150));
        this.tiles.push(new tile(this.path + 'tile1.png', 144, 144, 216));
        this.tiles.push(new tile(this.path + 'tile2.png', 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile3.png', 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile4.png', 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile5.png', 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile6.png', 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile7.png', 576, 360, 0));

        this.section = new section1(this.ctx, this.tiles);
    }

    private tiles: any;

    private ctx: any;
    private path: string;
    private section: section1;

    public draw(): void {
        this.section.draw();
    }
}

class section1 {
    constructor(ctx: any, tiles: tile[]) {
        this.ctx = ctx;
        this.tiles = tiles;
        this.xIdx = 0;
    }

    private ctx: any;
    private tiles: tile[];

    private xIdx: number;
    draw(): void {
        this.xIdx = 0;
        ///Set interval if necessary
        var mult = .5;
        var t = this.tiles[1];
        t.draw(this.ctx, this.xIdx, 550, mult);
        this.xIdx += +(t.width);

        var t = this.tiles[2];
        t.draw(this.ctx, this.xIdx, 550, mult);
        this.xIdx += +(t.width);

        var t = this.tiles[3];
        t.draw(this.ctx, this.xIdx, 550, mult);
        this.xIdx += +(t.width);
    }
}

class tile {
    constructor(path: string, width: number, height: number, yOff: number) {
        this.path = path;
        this.img = new Image();
        this.img.src = path;
        this.width = width;
        this.height = height;
        this.yOff = yOff;
    }

    width: number;
    height: number;
    private path: string;
    private img: any;
    private yOff: number;

    draw(ctx: any, xOffset: number, yOffset: number, mult: number): void {
        console.log(yOffset);
        ctx.drawImage(this.img, xOffset * -1, 0, this.width * 3,
        this.height, 0,
        (this.yOff + yOffset) * mult, (this.width * mult) * 3, this.height * mult);
    }
}