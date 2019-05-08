function setup() {
// put setup code here
  createCanvas(1000,600);
}

function draw() {
  // put drawing code here
  fill(180);
  rect(0,300,800,600); // ground
  
  fill(255);
  ellipse(400, 300, 150, 150); // Bottom Circle
  ellipse(400, 200, 100, 100); // Middle Circle
  ellipse(400, 120, 75, 75); // Top Circle
  
  line(360,200,170,100); // Arm 1
  line(440,200,620,100); //Arm 2
  
  let c=color('magenta');
  fill(c);
  ellipse(380,110,10,10); //eye
  ellipse(420,110,10,10); //eye

}
