let img;
let x1 = 0
let x2 = 600
let y = 300
let size = 50

let x1Speed = 10
let x2Speed = 10

let hit = false;

function preload() {

  img = loadImage('CryingEmojji.png');

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

}
function draw() {
  // put drawing code here
  hit = collideRectRect(x1,y,size,size,x2,y,size,size);

//Output a statement to console
  print(hit)

if (hit===true) {
  background(255,0,0);
  image(img,420,200);
  textSize(50);
  text('GAME OVER',width/2-120,height/2);

}

else {
  background(0);
  fill(127);
  rect(x1,y,size,size);

  fill(255);
  rect(x2,y,size,size);

  x1+=x1Speed;
  x2+=x2Speed;

if (x1>width || x1<0) {
  x1Speed*=-1;
}

if (x2>width || x2<0) {
  x2Speed*=-1;
  }
 }
}
