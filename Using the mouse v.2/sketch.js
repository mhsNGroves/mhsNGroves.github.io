/*    Nicholas Groves
     "Using the Mouse"
     April 16th, 2019
  Revised: May 8th, 2019    */


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);


}
function draw() {
  // put drawing code here
  doubleClicked();


}

function doubleClicked() {

if (mouseX > -10) {
  stroke(random(255),random(255),random(255));
  strokeWeight(10);
  line(mouseX,mouseY,width/2,height/2); /*this creates a line, that starts from the mouse's coordinates
                                          and finishes in the center of the screen*/
}
if (mouseX > -10) {
  fill(random(255),random(255),random(255));
  strokeWeight(1);
  square(random(width),random(height),random(100),random(100)); /*this creates random sized square
                                                                    somewhere on the screen*/
}
}
