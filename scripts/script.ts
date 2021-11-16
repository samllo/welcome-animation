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

//Square class 
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

// 5x5 square grid
const sqArray = [];
for (let i = 1; i < 26; i++) {
  sqArray.push(new SQUARE(y,x));
  y+= gap;
  if (i%5 === 0){
    x+=21;
    y-= gap*5;
  };
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
const sq1= new PIXI.Graphics();
    sq1.beginFill(0xDE3249);
    sq1.drawRect(0, 0, sqWidth, sqWidth);
    sq1.pivot.x = sqWidth/2;
    sq1.pivot.y =  sqWidth/2;
    sq1.x = x;
    sq1.y = y;
    stage.addChild(sq1);

    gsap.fromTo(sq1, 1, { pixi: {rotation:0, scale:1, x:100}, { pixi: {rotation:360, scale:2, x:100},  repeat: -1 });
