//canvas setup / GSAP setup
var appHeight = 600;
var appWidth = 600;
gsap.registerPlugin();
gsap.registerEffect({});
var app = new PIXI.Application({
    width: appWidth,
    height: appHeight,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0xeeeeee
});
document.getElementById("screen").appendChild(app.view);
var stage = app.stage;
////
var sqWidth = 20;
var y = 200;
var x = 200;
var gap = 21;
var SQUARE = /** @class */ (function () {
    function SQUARE(y, x) {
        var square = new PIXI.Graphics();
        square.beginFill(0xFFFF00);
        square.drawRect(0, 0, sqWidth, sqWidth);
        square.pivot.x = sqWidth / 2;
        square.pivot.y = sqWidth / 2;
        square.x = x;
        square.y = y;
        stage.addChild(square);
        this.square = square;
    }
    return SQUARE;
}());
var sqArray = [];
for (var i = 1; i < 26; i++) {
    sqArray.push(new SQUARE(y, x));
    y += gap;
    if (i % 5 === 0) {
        x += 21;
        y -= gap * 5;
    }
    ;
}
