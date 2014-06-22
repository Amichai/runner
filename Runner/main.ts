/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="PlatformBuilder.ts" />
/// <reference path="Game.ts" />

$(document).ready(() => {
    var ctx = $('#canvas')[0].getContext("2d");
    var g = new Game(ctx);
    //var p = new platformBuilder(ctx);
});