/*    Nicholas Groves
   "Using The Keyboard"
     April 24th, 2019
  Revised: May 8th, 2019  */


let x = 640;
let y = 500;
let size = 50;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  // put drawing code here
  ellipse(x,y,size,size);
}
function keyPressed() {

if (keyCode === UP_ARROW) {
  background(random(255),random(255),random(255));
  y-=(random(100));//moves the shape up a random value up to 100
  fill(random(255),random(255),random(255));
}

if (keyCode === LEFT_ARROW) {
  background(random(255),random(255),random(255));
  x-=(random(100));//same as line 20 but shape moves to the left
  fill(random(255),random(255),random(255));
}

if (keyCode === DOWN_ARROW) {
  background(random(255),random(255),random(255));
  y+=(random(100));//same as line 20 but shape moves down
  fill(random(255),random(255),random(255));
}

if (keyCode === RIGHT_ARROW) {
  background(random(255),random(255),random(255));
  x+=(random(100));//same as line 20 but shape moves to the right
  fill(random(255),random(255),random(255));
 }
}
