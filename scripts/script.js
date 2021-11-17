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
//Square class 
var sqWidth = 20;
var y = 200;
var x = 200;
var gap = 30;
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
// 5x5 square grid
var sqArray = [];
for (var i_1 = 1; i_1 < 26; i_1++) {
    sqArray.push(new SQUARE(y, x));
    y += gap;
    if (i_1 % 5 === 0) {
        x += gap;
        y -= gap * 5;
    }
    ;
}
/*To solve this you can create an array of objects, give those objects the starting values and finalyy tween those values, like this:

var array = [{a:1},{a:2},{a:3},{a:1},{a:2}],
    amount = array.length;
    
for(var i = 0; i < amount; i++)
{
    var element = array[i];
    TweenMax.to(element, 1, {a:0});
}
*/
// basic animation 
var sq1 = new PIXI.Graphics();
sq1.beginFill(0xDE3249);
sq1.drawRect(0, 0, sqWidth, sqWidth);
sq1.pivot.x = sqWidth / 2;
sq1.pivot.y = sqWidth / 2;
sq1.x = x;
sq1.y = y;
stage.addChild(sq1);
var tl = new TimelineMax({ repeat: -1 });
tl.to(sq1, 0.5, { pixi: { rotation: 360, scale: 2 } }).to(sq1, 0.5, { pixi: { rotation: 720, scale: 1 } });
console.log(sqArray);
console.log(sq1);
for (var i = 0; i < 25; i++) {
    var element = sqArray[i].square;
    var tl_1 = new TimelineMax({ repeat: -1 });
    tl_1.to(element, Math.random(), { pixi: { rotation: 360, scale: 1.2 } }).to(element, Math.random(), { pixi: { rotation: 720, scale: 1 } });
}
;
