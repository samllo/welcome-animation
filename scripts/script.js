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
/*
class TEXT {
  constructor(x,text) {
    const square = new PIXI.square();
    square.lineStyle(0);
    ball.beginFill(colour, 1);
    ball.drawCircle( 0, 0, radius);
    ball.alpha=0;
    this.radius = radius;
    ball.endFill();
    ball.pivot.x = radius/2;
    ball.pivot.y =  radius/2;
    ball.x =  x;
    ball.y =  y;
    app.stage.addChild(ball);
    TweenMax.to(ball, 2, {pixi:{alpha:1}});
    this.ball= ball;
  }
}
*/
var square = new PIXI.Graphics();
square.beginFill(0xFFFF00);
square.drawRect(0, 0, 200, 200);
square.x = 200;
square.y = 200;
stage.addChild(square);
