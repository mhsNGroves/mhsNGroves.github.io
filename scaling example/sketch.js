function setup() {
  // put setup code here
  //Create a canvas
  createCanvas(800,600);


}

function draw() {
  //Create variables for the width, height, x, and y values
  let width=100;
  let height=100;
  let x = 300;
  let y = 150;
  let scale = 3;


  // put drawing code here
  ellipse(x,y,width,height);
  ellipse(x,y+200,width*scale,height*scale);
}
