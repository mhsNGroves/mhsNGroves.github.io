//Global Varibales
let x = 100;
let y = 100;

let xSpeed = 20; //scale this value to make the ball faster/slower
let ySpeed = 20;// scale this value to make the ball faster/slower

let size = 100;

function setup() {
  // put setup code here
createCanvas(600,800);


}


function draw() {
// put drawing code here
//Change the background
background(29,127,17);
//Draw the rectangle
fill(255,0,67);
ellipse(x,y,size,size);

drawlines();

//Move the rectangle
x+=xSpeed;
y = y + ySpeed;

if (y+size>=height/0.95) {
  ySpeed = ySpeed*(-1);
}

if (y<=40) {
  ySpeed = -ySpeed;
}

if (x+size>=width/1.05) {
  xSpeed = xSpeed*(-1);
}

if (x<=115) {
  xSpeed = -xSpeed;
}
}
function drawlines() {

fill(255);
rect(300,0,10,800);
noStroke();
fill(29,127,17);
rect(520,0,80,800);
rect(0,0,80,800);
}
