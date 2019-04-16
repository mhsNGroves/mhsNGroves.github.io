/* April 10th,2019
Moving things using the mouse
Nicholas Groves */
let size = 50;

function setup() {
  var firstCanvas = createCanvas(windowWidth,windowHeight);
  rect(width/2,0,10,880);
}

function draw() {
  // This function does nothing, but it must exist.

}

function mouseMoved() {
  // This function is called whenever the mouse is moved

    stroke(255);

  if (mouseX >= width/2) {//draws a new circle whenever the mouse is moved on the right side of the screen
    ellipse(mouseX,mouseY,size,size);
    fill(random(255), random(255), random(255));


  }

  if (mouseX <= width/2) { //draws a new rectangle whenever the mouse is moved on the left side of the screen
    rect(mouseX,mouseY,size,size);
    fill(random(255), random(255), random(255));

  }
}

function mouseClicked() {

background(random(255),random(255),random(255)); //changes the background whenever the mouse is clicked
fill(random(255),random(255),random(255));
rect(width/2,0,10,880);
size = random(255);

}
