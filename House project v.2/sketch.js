/*    Nicholas Groves
      "House Project"
      March 19th, 2019
   Revised: May 8th, 2019 */


function setup() {
 // put setup code here
  createCanvas(2000,1600);

}

function draw() {
 // put drawing code here
  let x=300 //don't scale this value
  let y=400 //don't scale this value
  let houseWidth=100 //don't scale this value beyond 120
 //sky
  background(0,153,255);

 //ground
  fill(153,255,102);
  rect(x-houseWidth*3,y+houseWidth*4.5,houseWidth*2000,houseWidth*2000);
  fill(255);


 //Base of House
  fill(204,0,0);
  rect(x,y,houseWidth*5.5,houseWidth*4.5); //outside of house
  fill(255);
  fill(100);
  triangle(x,y,x+houseWidth*2.75,y-houseWidth*2,x+houseWidth*5.5,y); //roof of house
  fill(255);
 
  //door
  fill(153,51,0);
  rect(x+houseWidth*2.4,y+houseWidth*3,houseWidth*0.9,houseWidth*1.5);
  fill(255);
  fill(0);//color of doorknob
  ellipse(x+houseWidth*2.55,y+houseWidth*3.76,houseWidth*0.08,houseWidth*0.08);//doorknob
  fill(255);

 //second roof and roof window
  fill(153,204,255);
  ellipse(x+houseWidth*2.75,y-houseWidth*0.75,houseWidth*0.5,houseWidth*0.5); //roof window
  fill(255);
  line(x+houseWidth*1.4,y-houseWidth*0.67,x+houseWidth*2.75,y-houseWidth*1.4); //second roof
  line(x+houseWidth*2.75,y-houseWidth*1.4,x+houseWidth*4.1,y-houseWidth*0.67); //second roof
  line(x+houseWidth*2.5,y-houseWidth*0.75,x+houseWidth*3,y-houseWidth*0.75); //window line 1
  line(x+houseWidth*2.75,y-houseWidth*0.5,x+houseWidth*2.75,y-houseWidth); //window line 2

 //windows on the house
  fill(153,204,255);
  rect(x+houseWidth*0.65,y+houseWidth,houseWidth*0.75,houseWidth*0.75); //window 1
  fill(255);
  line(x+houseWidth*0.65,y+houseWidth*1.38,x+houseWidth*1.4,y+houseWidth*1.38);
  line(x+houseWidth*1.025,y+houseWidth,x+houseWidth*1.025,y+houseWidth*1.75);
  fill(153,204,255);
  rect(x+houseWidth*4.05,y+houseWidth,houseWidth*0.75,houseWidth*0.75); //window 2
  fill(255);
  line(x+houseWidth*4.05,y+houseWidth*1.38,x+houseWidth*4.8,y+houseWidth*1.38);
  line(x+houseWidth*4.425,y+houseWidth,x+houseWidth*4.425,y+houseWidth*1.75);
}
