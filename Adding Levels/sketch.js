/*U4L11b - Working with Levels

Scott Hughes
Apr 30
In this lesson, you will learn how to work with levels within your game. Watch the video listed below and use the files provided in order to work through this task. Pay attention to the video as it does go quickly. Rewatch sections if needed.

sketch.js
Javascript

alien.png
Image

p5_Working_With_Levels.mp4
Video
Class comments
No class comments yet.
Why don't you start the conversation?


We will initially set the level variable to 0
Level 0 --> Instructions
Level 1 --> Game
Level 2 --> Win Screen
*/
let level = 0;

//Create the x and y variables for our character
let x;
let y;
let x1;
let y1;
let x2;
let y2;
let hit = false
let hit2 = false
let size = 50


//Create a variable that will store our image
let img;
let img1;

function preload() {
  //Assign the image file to the variable
  img = loadImage('alien.png');
  img1 = loadImage('enemy.png');
}


function setup() {
  // put setup code here
  //Create the canvas
  createCanvas(windowWidth,windowHeight);

  //Assign the initial values for x and y
  x = width/2;
  y = height/2;
  x1 = 100;
  y1 = height/2;
  x2 = width/2+300;
  y2 = height/2-200;
}

function draw() {
  // put drawing code here

    print(level);
/*--------------------INSTRUCTIONS--------------------*/
  if (level ===0) {
    //Show the instructions to the user
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('ALIEN DOMINATION', width/2, height/2);


    textSize(16);
    text('You are a member of the Glorg alien race, a species determined to take over the earth. \nUse your arrow keys to move your character off of the screen to win.', width/2, height/2+50);
    text('Press enter to continue', width/2, height/2+100);

    //If they press enter, move to the next level (game)
    if (keyIsDown(ENTER)) {
      level+=1;
    }

  }
  /*--------------------END INSTRUCTIONS--------------------*/


  /*--------------------GAME--------------------*/
  else if (level ===1) {

    //Change the background and add the character
    background(200,100,255);
    image(img,x,y);

    //Move the character based on input from the user (arrow keys)
    if (keyIsDown(RIGHT_ARROW)) {
      x+=5;
    }

    if (keyIsDown(LEFT_ARROW)) {
      x-=5;
    }

    if (keyIsDown(UP_ARROW)) {
      y-=5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      y+=5;
    }

    //If the user leaves the screen, they win so move on to the next level (win)
    if (x>width || x<0 || y>height || y<0) {
      level+=1
      x = width/2
      y = height/2
    }
  }

  else if (level===2) {
    background(200,100,255);
    noStroke();
    rect(x,y,66,92);
    image(img,x,y);
    fill(200,100,255);
    rect(x1,y1,260,350);
    rect(x2,y2,260,350);
    image(img1,x1,y1);
    image(img1,x2,y2);
    hit = collideRectRect(x,y,66,92,x1,y1,260,350);
    hit2 = collideRectRect(x,y,66,92,x2,y2,260,350);



    if (hit === true || hit2===true) {
     background(255,0,0);
     fill(0);
     textSize(30);
     textAlign(CENTER,CENTER);
     text('You are in the endgame now',width/2,height/2);
     textSize(15);
     text('Press F5 to play again',width/2,height/2+50);


    }


    if (keyIsDown(RIGHT_ARROW)) {
        x+=5;
      }

    if (keyIsDown(LEFT_ARROW)) {
        x-=5;
      }

    if (keyIsDown(UP_ARROW)) {
        y-=5;
      }

    if (keyIsDown(DOWN_ARROW)) {
        y+=5;
      }

      //If the user leaves the screen, they win so move on to the next level (win)
    if (x>width || x<0 || y>height || y<0) {
        level+=1
        x = width/2
        y = height/2
      }
  }



  /*--------------------END WIN SCREEN--------------------*/
  //Change the backround and inform the user that they won
  else if (level ===3) {
    background(0,255,0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('YOU WIN!', width/2, height/2);
    textSize(16);
    text('Press enter to play again', width/2, height/2+50);

    //If the user presses enter, reset the x and y value and reset the level to level 1 (game)
    if (keyIsDown(ENTER)) {
      x=width/2;
      y=height/2;
      level=1;
    }
  }
}
