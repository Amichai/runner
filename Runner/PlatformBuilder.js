var platformBuilder = (function () {
    function platformBuilder(ctx) {
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
    platformBuilder.prototype.draw = function () {
        this.section.draw();
    };
    return platformBuilder;
})();
var section1 = (function () {
    function section1(ctx, tiles) {
        this.ctx = ctx;
        this.tiles = tiles;
        this.xIdx = 0;
    }
    section1.prototype.draw = function () {
        this.xIdx = 0;
        ///Set interval if necessary
        var mult = 0.5;
        var t = this.tiles[1];
        t.draw(this.ctx, this.xIdx, 550, mult);
        this.xIdx += +(t.width);
        var t = this.tiles[2];
        t.draw(this.ctx, this.xIdx, 550, mult);
        this.xIdx += +(t.width);
        var t = this.tiles[3];
        t.draw(this.ctx, this.xIdx, 550, mult);
        this.xIdx += +(t.width);
    };
    return section1;
})();
var tile = (function () {
    function tile(path, width, height, yOff) {
        this.path = path;
        this.img = new Image();
        this.img.src = path;
        this.width = width;
        this.height = height;
        this.yOff = yOff;
    }
    tile.prototype.draw = function (ctx, xOffset, yOffset, mult) {
        console.log(yOffset);
        ctx.drawImage(this.img, xOffset * -1, 0, this.width * 3, this.height, 0, (this.yOff + yOffset) * mult, (this.width * mult) * 3, this.height * mult);
    };
    return tile;
})();
//@ sourceMappingURL=PlatformBuilder.js.map
