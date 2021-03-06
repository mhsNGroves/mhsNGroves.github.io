/*       Nicholas Groves
   "Looping Structures - The Matrix"
          May 7th, 2019
      Revised: May 8th, 2019    */

//Global Variables
let x = 20
let y = 100
let size = 50


function setup() {

  createCanvas(windowWidth,windowHeight);
  background(255);
}

function draw() {

  var x = 0

  for(var x = 0; x <= width; x = x + 50) {
  noStroke();
  fill(0,random(255),0);
  ellipse(x,random(windowHeight),size,size);  // draws ellipses everywhere on the screen in columns that are 50 x-values apart
  textSize(30);
  text(char(random(255)),random(windowWidth),random(windowHeight));  // this draws random characters everywhere on the screen
 }
}
