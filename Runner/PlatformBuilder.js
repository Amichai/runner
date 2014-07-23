var platformBuilder = (function () {
    function platformBuilder(ctx) {
        this.ctx = ctx;
        this.path = 'Content/reanimations/';
        this.tiles = [];
        this.tiles.push(new tile(this.path + 'fan.png', tile.tile6level, 576, 144, 150));
        this.tiles.push(new tile(this.path + 'tile1.png', tile.tile6level, 144, 144, 216));
        this.tiles.push(new tile(this.path + 'tile2.png', tile.tile6level, 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile3.png', tile.tile6level, 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile4.png', tile.tile6level, 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile5.png', tile.tile6level, 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile6.png', tile.tile6level, 576, 360, 0));
        this.tiles.push(new tile(this.path + 'tile7.png', tile.tile7level, 576, 360, 0));
        this.count = 0;
        this.section = new section1(this.ctx, this.tiles);
    }
    platformBuilder.prototype.getPlatformLevel = function () {
        return this.section.getPlatformLevel(this.count);
    };
    platformBuilder.prototype.draw = function () {
        this.section.draw(this.count);
        //this.section.draw(this.count - this.section.sectionWidth);
        //this.section.draw(this.count - this.section.sectionWidth);
        //this.count -= 8;
        this.count++;
    };
    return platformBuilder;
})();
var section1 = (function () {
    function section1(ctx, tiles) {
        this.ctx = ctx;
        this.sectionTiles = tiles;
        this.xIdx = 0;
        this.sectionWidth = 0;
        for(var i = 0; i < this.sectionTiles.length; i++) {
            this.sectionWidth += this.sectionTiles[i].width;
        }
    }
    section1.prototype.getPlatformLevel = function (count) {
        console.log('this idx: ' + this.xOffset);
        var inspectionIdx = 0;
        var inspectionWidth = 0;
        while(this.xOffset > inspectionWidth) {
            inspectionWidth += this.sectionTiles[inspectionIdx].width;
            inspectionIdx++;
        }
        return this.sectionTiles[inspectionIdx].getPlatformLevel(inspectionWidth - this.xOffset);
    };
    section1.prototype.getSectionIdx = function (idx) {
        var inspectionIdx = 0;
        var inspectionWidth = 0;
        while(idx > inspectionWidth) {
            inspectionWidth += this.sectionTiles[inspectionIdx].width;
            inspectionIdx++;
        }
        return inspectionIdx;
    };
    section1.prototype.draw = function (xOffset) {
        this.xOffset = xOffset;
        this.xIdx = xOffset * -1;
        ///Set interval if necessary
        var yOffset = 850;
        var mult = 0.5;
        //var t = this.tiles[1];
        //t.draw(this.ctx, this.xIdx, yOffset, mult);
        //this.xIdx += t.width;
        var i1 = this.getSectionIdx(this.xOffset);
        var i2 = this.getSectionIdx(this.xOffset + 600);
        var t = this.sectionTiles[i1];
        t.draw(this.ctx, this.xIdx, yOffset, mult);
        this.xIdx += t.width;
        var t = this.sectionTiles[i2];
        t.draw(this.ctx, this.xIdx, yOffset, mult);
        this.xIdx += t.width;
    };
    return section1;
})();
var tile = (function () {
    function tile(path, levelData, width, height, yOff) {
        this.levelData = [];
        this.imgPath = path;
        this.img = new Image();
        this.img.src = path;
        this.width = width;
        this.height = height;
        this.yOff = yOff;
        var result;
        if(levelData != undefined) {
            result = levelData.split(',');
            for(var i = 0; i < result.length; i++) {
                this.levelData.push(+result[i]);
            }
        }
    }
    tile.prototype.getPlatformLevel = function (idx) {
        //idx = (this.width - idx) % this.width;
        var l = this.levelData[idx % this.levelData.length];
        console.log('idx: ' + idx + ' l: ' + l);
        if(l == undefined) {
            debugger;

        }
        return l;
    };
    tile.prototype.draw = function (ctx, xOffset, yOffset, mult) {
        ctx.drawImage(this.img, xOffset * -1, 0, this.width * 2.5, this.height, 0, (this.yOff + yOffset) * mult, (this.width * mult) * 2.5, this.height * mult);
    };
    tile.tile6level = "145,145,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,147,147,147,147,147,148,148,148,148,148,148,148,148,149,149,149,149,149,149,150,150,150,150,150,151,151,151,151,151,152,152,152,152,152,153,153,153,153,153,154,154,154,154,154,155,155,155,155,156,156,156,156,157,157,157,158,158,158,159,159,159,159,160,160,160,161,161,161,162,162,162,163,163,163,163,164,164,164,165,165,165,165,166,166,167,167,167,168,168,169,169,169,170,170,171,171,171,172,172,173,173,173,174,174,174,175,175,176,176,176,177,177,178,178,178,179,179,180,180,180,181,181,182,182,183,183,184,184,185,185,185,186,186,187,187,188,188,189,189,190,190,191,191,191,192,192,193,193,194,194,195,195,196,196,197,197,198,198,199,199,200,200,201,201,202,202,203,203,204,204,205,205,206,206,207,207,208,208,209,209,210,210,211,211,212,212,213,214,214,215,215,216,216,217,217,218,218,219,220,220,221,221,222,222,223,223,224,225,225,226,226,227,227,228,228,229,230,230,231,231,232,232,233,233,234,235,235,236,236,237,237,238,238,239,240,240,241,241,242,242,243,243,244,245,245,246,246,247,247,248,248,249,250,250,251,251,252,252,253,253,254,255,255,256,256,257,257,258,258,259,260,260,261,261,262,262,263,263,264,264,265,266,266,267,267,268,268,269,269,270,271,271,272,272,273,273,274,274,275,276,276,277,277,278,278,279,279,280,280,281,282,282,283,283,284,284,285,285,286,287,287,288,288,289,289,290,290,291,292,292,293,293,294,294,295,295,296,296,297,297,298,298,299,299,300,300,301,301,302,302,303,303,304,304,305,305,306,306,307,307,308,308,309,309,310,310,311,311,312,312,313,313,314,314,315,315,316,316,316,317,317,318,318,319,319,320,320,321,321,321,322,322,323,323,324,324,325,325,325,326,326,327,327,328,328,329,329,329,330,330,330,331,331,332,332,332,333,333,333,334,334,335,335,335,336,336,337,337,337,338,338,338,339,339,340,340,340,341,341,341,342,342,342,343,343,343,344,344,344,344,345,345,345,346,346,346,347,347,347,347,348,348,348,349,349,349,349,350,350,350,351,351,351,351,352,352,352,353,353,353,353,353,353,354,354,354,354,354,355,355,355,355,355,356,356,356,356,356,356,357,357,357,357,357,358,358,358,358,358,358,359,359,359,359,359,359,359,359,359,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,";
    tile.tile7level = "360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,359,359,359,359,359,359,359,359,359,358,358,358,358,358,358,357,357,357,357,357,356,356,356,356,356,356,355,355,355,355,355,354,354,354,354,354,353,353,353,353,353,353,352,352,352,351,351,351,351,350,350,350,349,349,349,349,348,348,348,347,347,347,347,346,346,346,345,345,345,344,344,344,344,343,343,343,342,342,342,341,341,341,340,340,340,339,339,338,338,338,337,337,337,336,336,335,335,335,334,334,333,333,333,332,332,332,331,331,330,330,330,329,329,329,328,328,327,327,326,326,325,325,325,324,324,323,323,322,322,321,321,321,320,320,319,319,318,318,317,317,316,316,316,315,315,314,314,313,313,312,312,311,311,310,310,309,309,308,308,307,307,306,306,305,305,304,304,303,303,302,302,301,301,300,300,299,299,298,298,297,297,296,296,295,295,294,294,293,293,292,292,291,290,290,289,289,288,288,287,287,286,285,285,284,284,283,283,282,282,281,280,280,279,279,278,278,277,277,276,276,275,274,274,273,273,272,272,271,271,270,269,269,268,268,267,267,266,266,265,264,264,263,263,262,262,261,261,260,260,259,258,258,257,257,256,256,255,255,254,253,253,252,252,251,251,250,250,249,248,248,247,247,246,246,245,245,244,243,243,242,242,241,241,240,240,239,238,238,237,237,236,236,235,235,234,233,233,232,232,231,231,230,230,229,228,228,227,227,226,226,225,225,224,223,223,222,222,221,221,220,220,219,218,218,217,217,216,216,215,215,214,214,213,212,212,211,211,210,210,209,209,208,208,207,207,206,206,205,205,204,204,203,203,202,202,201,201,200,200,199,199,198,198,197,197,196,196,195,195,194,194,193,193,192,192,191,191,191,190,190,189,189,188,188,187,187,186,186,185,185,185,184,184,183,183,182,182,181,181,180,180,180,179,179,178,178,178,177,177,176,176,176,175,175,174,174,174,173,173,173,172,172,171,171,171,170,170,169,169,169,168,168,167,167,167,166,166,165,165,165,165,164,164,164,163,163,163,163,162,162,162,161,161,161,160,160,160,159,159,159,159,158,158,158,157,157,157,156,156,156,156,155,155,155,155,154,154,154,154,154,153,153,153,153,153,152,152,152,152,152,151,151,151,151,151,150,150,150,150,150,149,149,149,149,149,149,148,148,148,148,148,148,148,148,147,147,147,147,147,147,147,147,147,147,147,147,147,147,146,146,146,146,146,146,146,146,146,146,146,146,146,146,146,145,145,";
    return tile;
})();
//@ sourceMappingURL=PlatformBuilder.js.map
