//canvas setup / GSAP setup

const appHeight = 600;
const appWidth = 600;
gsap.registerPlugin();
gsap.registerEffect({});

const app = new PIXI.Application({
  width: appWidth,
  height: appHeight,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xeeeeee
});

document.getElementById("screen").appendChild(app.view);
const stage = app.stage;


////

const sqWidth = 20;
const y = 200;
const x = 200;
const gap = 21;
class SQUARE{
  constructor(y,x){
    const square = new PIXI.Graphics();
    square.beginFill(0xFFFF00);
    square.drawRect(0, 0, sqWidth, sqWidth);
    square.pivot.x = sqWidth/2;
    square.pivot.y =  sqWidth/2;
    square.x = x;
    square.y = y;
    stage.addChild(square);
    this.square = square;
  }
}

const sqArray = [];


for (let i = 1; i < 26; i++) {
  sqArray.push(new SQUARE(y,x));
  y+= gap;
  if (i%5 === 0){
    x+=21;
    y-= gap*5;
  };
}



