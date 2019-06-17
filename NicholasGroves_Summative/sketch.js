


/* GLOBAL VARIABLES */
 let level = 10;
 let img;
 let followMouse = false;
 let endgame = false;
 let ballX = 275;
 let ballY = 10;
 let size = 15;
 let size1 = 50;
 let size2 = 750;
 let size3 = 670;
 let size4 = 640;
 let size5 = 1000;
 let size6 = 640;
 let size7 = 1000;
 let x = 0;
 let y = 200;
 let x1 = 0;
 let y1 = 450;
 let x2 = 320;
 let y2 = 150;
 let x3 = -140;
 let y3 = 75;
 let x4 = 772.99;
 let y4 = 75;
 let hit = false;
 let hit2 = false;
 let hit3 = false;
 let hit4 = false;
 let hit5 = false;
 let hit6 = false;
 let hit7 = false;
 let hit8 = false;
 let hit9 = false;
 let hit10 = false;
 let hit11 = false;
 let hit12 = false;
 let hit13 = false;
 let hit14 = false;
 let hit15 = false;
 let hit16 = false;
 let hit17 = false;
 let hit18 = false;
 let hit19 = false;
 let hit20 = false;
 let hit21 = false;
 let hit22 = false;
 let hit23 = false;
 let hit24 = false;
 let hit25 = false;
 let hit26 = false;
 let hit27 = false;
 let hit28 = false;
 let hit29 = false;
 let hit30 = false;
 let hit31 = false;
 let hit32 = false;
 let hit33 = false;
 let hit34 = false;
 let hit35 = false;
 let hit36 = false;
 let hit37 = false;
 let hit38 = false;
 let hit39 = false;
 let hit40 = false;
 let hit41 = false;
 let hit42 = false;
 let hit43 = false;
 let hit44 = false;
 let hit45 = false;

 let xSpeed = 40;
 let xSpeed1 = 40;
 let xSpeed2 = 1.5;
 let xSpeed3 = 6;
 let xSpeed4 = 6;



function preload() {

  img = loadImage('leprechaun.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {

  print(level);
  print("Ball x",ballX,"Ball y",ballY)

//--------------------LOADING SCREEN-------------------
if (level === 0) {

  background(200,87,100);
  fill(0,0,255);
  textSize(40);
  text('STAY IN SAFE ZONE',width/2.8,height/2-300);
  fill(0);
  textSize(20);
  text('This game is very simple. Drag the ball, using your mouse, from one side of the screen to the other.',width/7,height/4.5)
  text('You cannot leave the safe zone, or your game will restart. There will be 6 levels, with 1 bonus level as a CHECKPOINT.',width/12,height/4.1)
  text('Me and this leprechaun wish you good luck',width/2.8,height/3.75)
  image(img,400,250);
  textSize(34);
  text('Press ENTER to start', width/2.6,height/1.05);

}
//-------------------------LEVEL 1-------------------------------
else if(level === 1) {

  if (followMouse === true) {
    ballX = mouseX
    ballY = mouseY
  }



    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,250,1400); //left top rectangle
    rect(300,0,1000,300); // middle top rectangle
    rect(250,350,500,1000); //bottom left rectangle
    rect(800,300,600,700); //bottom right rectangle
    fill(0);
    textSize(25);
    text('LEVEL 1',20,30);
    textSize(15);
    text('Drag your cursor so that it sits on the ball. Press SPACE to gain \ncontrol of the ball. You must do this at the start of each level.',600,100);

    hit = collideRectCircle(0,0,250,1400,ballX,ballY,size,size);
    hit2 = collideRectCircle(300,0,1000,300,ballX,ballY,size,size);
    hit3 = collideRectCircle(250,350,500,1000,ballX,ballY,size,size);
    hit4 = collideRectCircle(800,300,600,700,ballX,ballY,size,size);

// END GAME SCREEN
  if (hit === true || hit2 === true || hit3 === true || hit4 === true) {

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "F5" to restart',width/2,height/1.3);
  }




  if (ballY>windowHeight - 10) {
    level += 1;
    followMouse = false;
    ballX = 400;
    ballY = 10;
  }
} //-------------------------END OF LEVEL 1 ----------------
else if (level === 2) {

  if (followMouse === true) {
    ballX = mouseX
    ballY = mouseY
  }

    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,375,1100); //left top rectangle
    rect(425,0,900,200); // middle top rectangle
    rect(375,250,800,200); //middle screen rectangle
    rect(1210,200,400,900); //right side rectangle
    rect(408,485,900,600); //bottom middle rectangle
    fill(0);
    textSize(25);
    text('LEVEL 2', 20,30);


    hit5 = collideRectCircle(0,0,375,1100,ballX,ballY,size,size);
    hit6 = collideRectCircle(425,0,900,200,ballX,ballY,size,size);
    hit7 = collideRectCircle(375,250,800,200,ballX,ballY,size,size);
    hit8 = collideRectCircle(1210,200,400,900,ballX,ballY,size,size);
    hit9 = collideRectCircle(408,485,900,600,ballX,ballY,size,size);

  if (hit5 === true || hit6 === true || hit7 === true || hit8 === true || hit9 === true) {

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "F5" to restart',width/2,height/1.3);

  }

  if (ballY>windowHeight - 10) {
    level += 1;
    followMouse = false;
    ballX = 427;
    ballY = 10;
  }

}
//--------------------END OF LEVEL 2---------------------------
else if (level === 3) {

  if (followMouse === true) {
    ballX = mouseX
    ballY = mouseY
  }


    background(255);
    fill(250,0,0);
    rect(300,740,40,200); //secret rectangle
    fill(200,0,0);
    rect(740,780,50,400);//secret rectangle (wrong one)
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,400,500); //top left rectangle
    rect(0,500,300,600); //bottom left rectangle
    rect(450,0,900,600); //top right rectangle
    rect(290,640,900,100); //bottom middle (long rectangle)
    rect(345,550,120,50); //bottom middle (short rectangle)
    rect(1235,570,100,400); //bottom right rectangle
    rect(340,780,400,400); //bottom rectangle
    rect(790,780,1200,200); //bottom right rectangle #2
    fill(0);
    textSize(25);
    text('LEVEL 3',20,30);
    textSize(15);
    text('Watch out for secrets',700,400)

    hit10 = collideRectCircle(0,0,400,500,ballX,ballY,size,size);
    hit11 = collideRectCircle(0,500,300,600,ballX,ballY,size,size);
    hit12 = collideRectCircle(450,0,900,600,ballX,ballY,size,size);
    hit13 = collideRectCircle(290,640,900,100,ballX,ballY,size,size);
    hit14 = collideRectCircle(345,550,120,50,ballX,ballY,size,size);
    hit15 = collideRectCircle(1235,570,100,400,ballX,ballY,size,size);
    hit16 = collideRectCircle(340,780,400,400,ballX,ballY,size,size);
    hit17 = collideRectCircle(790,780,1200,200,ballX,ballY,size,size);

  //secret rectangle

    hit18 = collideRectCircle(740,780,50,400,ballX,ballY,size,size);


  if (hit10 === true || hit11 === true || hit12 === true || hit13 === true || hit14 === true || hit15 === true || hit16 === true || hit17 === true ) {

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "F5" to restart',width/2,height/1.3);

  }

  if (hit18 === true) {

    followMouse = false;
    background(0);
    textSize(30);
    fill(255);
    text('Way too obvious. Try again...',width/2.7,height/2);
    textSize(20);
    text('Press F5 to start over haha',width/2.5,height/1.3);

  }

  if (ballY>windowHeight - 10) {
    level += 1;
    followMouse = false;
    ballX = 1035;
    ballY = 10;
    }

  }
//----------------------------END OF LEVEL 3-------------------------

                          //BONUS LEVEL (EXPLANATION)
else if(level === 4) {

    background(0,150,50);
    textSize(30);
    fill(255);
    text('CONGRATULATIONS! You have made it to the bonus level',width/2,height/3);
    textSize(25);
    textAlign(CENTER,CENTER);
    text('This counts as a CHECKPOINT. If you complete this level, you will not have to restart from the beginning, \n you will restart from the following level. If you mess up, no harm done, but you begin from the start \nif you mess up again',width/2,height/2);
    textSize(50);
    fill(0,0,100);
    text('GOOD LUCK',width/2,height/1.3);
    fill(255);
    textSize(20);
    text('(press ENTER to continue)',width/2,height/1.1);

  if (keyIsDown(ENTER)) {

    level+=1;
 }
}
//-------------------------END OF EXPLANATION---------------


                           //BONUS LEVEL (GAME)
else if (level === 5) {

    cursor();

  if (followMouse === true) {
    ballX = mouseX
    ballY = mouseY
  }


    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(253.5);
    rect(0,0,1000,100); //top middle rectangle
    rect(1070,0,1000,1000); //right side rectangle
    rect(200,170,1000,200); //center top rectangle
    rect(0,100,130,1000); //left side rectangle
    rect(130,440,870,300);//center bottom rectangle
    rect(400,810,1000,100);//bottom rectangle(center)
    rect(130,740,200,1000);//bottom rectangle(left-center)
    fill(0);
    textSize(25);
    text('BONUS LEVEL',100,30);
    textSize(15);
    text('There is a path. You must find it first...\n Tip: Hold your monitor at an angle ' ,500,250);

    hit19 = collideRectCircle(0,0,1000,100,ballX,ballY,size,size);
    hit20 = collideRectCircle(1070,0,1000,1000,ballX,ballY,size,size);
    hit21 = collideRectCircle(200,170,1000,200,ballX,ballY,size,size);
    hit22 = collideRectCircle(0,100,130,1000,ballX,ballY,size,size);
    hit23 = collideRectCircle(130,440,870,300,ballX,ballY,size,size);
    hit24 = collideRectCircle(400,810,1000,100,ballX,ballY,size,size);
    hit25 = collideRectCircle(130,740,200,1000,ballX,ballY,size,size);

  if(ballY > windowHeight - 10) {

    followMouse = false;

    background(0,130,200);
    fill(0);
    textSize(40);
    text('YOU COMPLETED THE BONUS LEVEL!',width/2,height/2.2);
    textSize(25);
    text('From this point forward, you will restart from level 4, not the beginning. Good luck!',width/2,height/1.6);
    textSize(18);
    text('Press "z" to continue',width/2,height/1.3);


  }


  if(hit19 === true || hit20 === true || hit21 === true || hit22 === true || hit23 === true || hit24 === true || hit25 === true) {

    followMouse = false;
    background(0);
    fill(255);
    textSize(35);
    text('You blew your chance :(',width/2,height/2);
    textSize(25);
    text('Good luck on level 4. You will need it.',width/2,height/1.6);
    textSize(18);
    text('Press "o" to continue',width/2,height/1.2);
    ballX = 275;
    ballY = 10;
  }



}

//----------------LEVEL 4------------------------

else if(level === 6) {

  if(followMouse === true) {

    ballX = mouseX
    ballY = mouseY

}

    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,250,1000);//top left rectangle
    rect(300,0,200,700);//middle left rectangle
    rect(250,750,700,300);//bottom rectangle
    rect(550,150,270,600);//middle rectangle
    rect(500,0,800,100);//top middle rectangle
    rect(870,100,700,400);//top right rectangle
    rect(820,550,230,500);//bottom right rectangle (further from the edge)
    rect(1080,500,600,500);//bottom right rectangle (at the edge)
    fill(0);
    textSize(25);
    text('LEVEL 4',60,30);
    textSize(15);
    text('Watch out for moving rectangles!',600,30);

    fill(255,0,0);
    rect(x,y,size1,size1)

    x+=xSpeed;

  if (x+size1>=windowWidth/1.05 || x<=10) {
    xSpeed = xSpeed*(-1);
}

    rect(x1,y1,size1,size1)

    x1+=xSpeed1;

  if (x1+size1>=windowWidth/1.05 || x1<=10) {
    xSpeed1 = xSpeed1*(-1);
}

    hit26 = collideRectCircle(0,0,250,1000,ballX,ballY,size,size);
    hit27 = collideRectCircle(300,0,200,700,ballX,ballY,size,size);
    hit28 = collideRectCircle(250,750,700,300,ballX,ballY,size,size);
    hit29 = collideRectCircle(550,150,270,600,ballX,ballY,size,size);
    hit30 = collideRectCircle(500,0,800,100,ballX,ballY,size,size);
    hit31 = collideRectCircle(870,100,700,400,ballX,ballY,size,size);
    hit32 = collideRectCircle(820,550,230,500,ballX,ballY,size,size);
    hit33 = collideRectCircle(1080,500,600,500,ballX,ballY,size,size);
    hit34 = collideRectCircle(x,y,size1,size1,ballX,ballY,size,size);
    hit35 = collideRectCircle(x1,y1,size1,size1,ballX,ballY,size,size);



  if (hit26 === true || hit27 === true || hit28 === true || hit29 === true || hit30 === true || hit31 === true || hit32 === true || hit33 === true || hit34 === true || hit35 === true ) {

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "F5" to restart',width/2,height/1.3);
    xSpeed = 0;
    xSpeed1 = 0;

  }

  if(ballY > windowHeight - 10) {
    level+=1;
    followMouse = false;
    ballX = 125;
    ballY = 10;
  }

}

//------------------LEVEL 5---------------------------

else if(level === 7) {

  if(followMouse === true) {

    ballX = mouseX
    ballY = mouseY

}

    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,100,1000);//left side rectangle
    rect(0,820,1000,300);//bottom rectangle
    rect(150,0,100,770);//adjacent to legt side rectangle
    rect(250,0,1000,100);//top rectangle
    rect(1050,0,500,1000);//right side rectangle
    fill(0);
    textSize(25);
    text('LEVEL 5',230,30);

    fill(255,0,0);
    rect(x2,y2,size2,size3);

    x2+=xSpeed2;

  if (x2+size2>=windowWidth/1.14 || x2<=220) {
      xSpeed2 = xSpeed2*(-1);
  }

    hit36 = collideRectCircle(0,0,100,1000,ballX,ballY,size,size);
    hit37 = collideRectCircle(0,820,1000,300,ballX,ballY,size,size);
    hit38 = collideRectCircle(150,0,100,770,ballX,ballY,size,size);
    hit39 = collideRectCircle(250,0,1000,100,ballX,ballY,size,size);
    hit40 = collideRectCircle(1050,0,500,1000,ballX,ballY,size,size);
    hit41 = collideRectCircle(x2,y2,size2,size3,ballX,ballY,size,size);

  if(hit36 === true || hit37 === true || hit38 === true || hit39 === true || hit40 === true || hit41 === true) {

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "F5" to restart',width/2,height/1.3);
    xSpeed2 = 0;

  }

  if(ballY > windowHeight - 10) {
    level+=1
    followMouse = false;
    ballX = 640;
    ballY = 10;
  }

}

//------------------LEVEL 6-----------------------

else if(level === 8) {

  if(followMouse === true) {

    ballX = mouseX
    ballY = mouseY
}

    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,550,75);
    rect(730,0,550,75);
    fill(0);
    textSize(25);
    text('LEVEL 6', 60,30);
    textSize(15);
    text('The last level! It is a sprint to the finish!',910,40);

    fill(255,0,0);
    rect(x3,y3,size4,size5);

    x3+=xSpeed3;

  if (x3<=-140 || x3>=0) {
    xSpeed3 = xSpeed3*(-1);
  }

    rect(x4,y4,size6,size7);

    x4+=xSpeed4;

  if (x4>=773 || x4<=640) {
      xSpeed4 = xSpeed4*(-1);
    }

    hit42 = collideRectCircle(0,0,550,75,ballX,ballY,size,size);
    hit43 = collideRectCircle(730,0,550,75,ballX,ballY,size,size);
    hit44 = collideRectCircle(x3,y3,size4,size5,ballX,ballY,size,size);
    hit45 = collideRectCircle(x4,y4,size6,size7,ballX,ballY,size,size);

  if(hit42 === true || hit43 === true || hit44 === true || hit45 === true) {

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "F5" to restart',width/2,height/1.3);
    xSpeed3 = 0;
    xSpeed4 = 0;

  }

  if(ballY >= windowHeight-10) {

    level+=1
    followMouse = false;
  }

}

//-----------------WIN SCREEN----------------

else if(level === 9) {

  background(0,225,0);
  fill(0);
  textSize(50);
  text('CONGRATULATIONS! YOU BEAT THE GAME',width/2,height/2);
  textSize(25);
  text('Press F5 to play again',width/2,height/1.7);
}

//-------------LEVEL 4 FOR BONUS GAME COMPLETION----------------
else if(level === 10) {

    ballX = 275;
    ballY = 10;

  if(followMouse === true) {

    ballX = mouseX
    ballY = mouseY

}

    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,250,1000);//top left rectangle
    rect(300,0,200,700);//middle left rectangle
    rect(250,750,700,300);//bottom rectangle
    rect(550,150,270,600);//middle rectangle
    rect(500,0,800,100);//top middle rectangle
    rect(870,100,700,400);//top right rectangle
    rect(820,550,230,500);//bottom right rectangle (further from the edge)
    rect(1080,500,600,500);//bottom right rectangle (at the edge)
    fill(0);
    textSize(25);
    text('LEVEL 4',60,30);
    textSize(15);
    text('Watch out for moving rectangles!',600,30);

    fill(255,0,0);
    rect(x,y,size1,size1)

    x+=xSpeed;

  if (x+size1>=windowWidth/1.05 || x<=10) {
    xSpeed = xSpeed*(-1);
}

    rect(x1,y1,size1,size1)

    x1+=xSpeed1;

  if (x1+size1>=windowWidth/1.05 || x1<=10) {
    xSpeed1 = xSpeed1*(-1);
}

    hit26 = collideRectCircle(0,0,250,1000,ballX,ballY,size,size);
    hit27 = collideRectCircle(300,0,200,700,ballX,ballY,size,size);
    hit28 = collideRectCircle(250,750,700,300,ballX,ballY,size,size);
    hit29 = collideRectCircle(550,150,270,600,ballX,ballY,size,size);
    hit30 = collideRectCircle(500,0,800,100,ballX,ballY,size,size);
    hit31 = collideRectCircle(870,100,700,400,ballX,ballY,size,size);
    hit32 = collideRectCircle(820,550,230,500,ballX,ballY,size,size);
    hit33 = collideRectCircle(1080,500,600,500,ballX,ballY,size,size);
    hit34 = collideRectCircle(x,y,size1,size1,ballX,ballY,size,size);
    hit35 = collideRectCircle(x1,y1,size1,size1,ballX,ballY,size,size);



  if (hit26 === true || hit27 === true || hit28 === true || hit29 === true || hit30 === true || hit31 === true || hit32 === true || hit33 === true || hit34 === true || hit35 === true ) {

    level+=1;
}

if(ballY > windowHeight - 10) {
  level+=2;
  followMouse = false;
  ballX = 125;
  ballY = 10;
}

}
else if(level === 11){

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "z" to restart',width/2,height/1.3);
}




//------------------LEVEL 5 FOR BONUS GAME COMPLETION---------------------------

else if(level === 12) {

  if(followMouse === true) {

    ballX = mouseX
    ballY = mouseY

}

    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,100,1000);//left side rectangle
    rect(0,820,1000,300);//bottom rectangle
    rect(150,0,100,770);//adjacent to legt side rectangle
    rect(250,0,1000,100);//top rectangle
    rect(1050,0,500,1000);//right side rectangle
    fill(0);
    textSize(25);
    text('LEVEL 5',230,30);

    fill(255,0,0);
    rect(x2,y2,size2,size3);

    x2+=xSpeed2;

  if (x2+size2>=windowWidth/1.14 || x2<=220) {
      xSpeed2 = xSpeed2*(-1);
  }

    hit36 = collideRectCircle(0,0,100,1000,ballX,ballY,size,size);
    hit37 = collideRectCircle(0,820,1000,300,ballX,ballY,size,size);
    hit38 = collideRectCircle(150,0,100,770,ballX,ballY,size,size);
    hit39 = collideRectCircle(250,0,1000,100,ballX,ballY,size,size);
    hit40 = collideRectCircle(1050,0,500,1000,ballX,ballY,size,size);
    hit41 = collideRectCircle(x2,y2,size2,size3,ballX,ballY,size,size);

  if(hit36 === true || hit37 === true || hit38 === true || hit39 === true || hit40 === true || hit41 === true) {

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "z" to restart',width/2,height/1.3);
    xSpeed2=0;

  }

  if(ballY > windowHeight - 10) {
    level+=1
    followMouse = false;
    ballX = 640;
    ballY = 10;
  }

}

//------------------LEVEL 6 FOR BONUS GAME COMPLETION-----------------------

else if(level === 13) {

  if(followMouse === true) {

    ballX = mouseX
    ballY = mouseY
}

    background(255);
    fill(100,190,90);
    ellipse(ballX,ballY,size,size);
    noStroke();
    fill(255,0,0);
    rect(0,0,550,75);
    rect(730,0,550,75);
    fill(0);
    textSize(25);
    text('LEVEL 6', 60,30);
    textSize(15);
    text('The last level! It is a sprint to the finish!',910,40);

    fill(255,0,0);
    rect(x3,y3,size4,size5);

    x3+=xSpeed3;

  if (x3<=-140 || x3>=0) {
    xSpeed3 = xSpeed3*(-1);
  }

    rect(x4,y4,size6,size7);

    x4+=xSpeed4;

  if (x4>=773 || x4<=640) {
      xSpeed4 = xSpeed4*(-1);
    }

    hit42 = collideRectCircle(0,0,550,75,ballX,ballY,size,size);
    hit43 = collideRectCircle(730,0,550,75,ballX,ballY,size,size);
    hit44 = collideRectCircle(x3,y3,size4,size5,ballX,ballY,size,size);
    hit45 = collideRectCircle(x4,y4,size6,size7,ballX,ballY,size,size);

  if(hit42 === true || hit43 === true || hit44 === true || hit45 === true) {

    followMouse = false;
    background(0);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,0,0);
    text('GAME OVER',width/2,height/2);
    fill(255);
    textSize(25);
    text('Press "z" to restart',width/2,height/1.3);
    xSpeed3 = 0;
    xSpeed4 = 0;

  }

  if(ballY >= windowHeight-10) {

    level+=1
    followMouse = false;
  }

}

else if(level === 14) {

  background(0,225,0);
  fill(0);
  textSize(50);
  text('CONGRATULATIONS! YOU BEAT THE GAME',width/2,height/2);
  textSize(25);
  text('Press F5 to play again',width/2,height/1.7);
}


}





function keyPressed() {
  if (level === 1 & mouseX >260 & mouseX <290 & mouseY <25 & keyCode === 32) {
    followMouse = true;
}

  if (level === 2 & mouseX >380 & mouseX <420 & mouseY <25 & keyCode === 32) {
    followMouse = true;
  }

  if (level === 3 & mouseX >410 & mouseX <445 & mouseY <25 & keyCode === 32) {
    followMouse = true;
  }

  if (level === 5 & mouseX >1015 & mouseX <1050 & mouseY <25 & keyCode === 32){
    followMouse = true;
  }

  if (level === 6 & mouseX >260 & mouseX <290 & mouseY <25 & keyCode === 32){
    followMouse = true;
  }

  if(level === 7 & mouseX>105 & mouseX <140 & mouseY <25 & keyCode === 32){
    followMouse = true;
  }
  if(level === 8 & mouseX >625 & mouseX <660 & mouseY <25 & keyCode === 32){
    followMouse = true;
  }
  if (level === 10 & mouseX >260 & mouseX <290 & mouseY <25 & keyCode === 32){
    followMouse = true;
  }

  if(level === 12 & mouseX>105 & mouseX <140 & mouseY <25 & keyCode === 32){
    followMouse = true;
  }
  if(level === 13 & mouseX >625 & mouseX <660 & mouseY <25 & keyCode === 32){
    followMouse = true;
  }

  if(level === 0 & keyCode === 13) {
    level+=1;
}

  if(level === 4 & keyCode === 13) {
    level=5;
  }

  if(level===5 & keyCode === 79) {
    level+=1;
  }

  if(level ===5 & keyCode === 90) {
    level=10;
  }

  if(level ===11 & keyCode === 90) {
    level=10;

  }
  if(level ===12 & keyCode === 90) {
    level=10;
    xSpeed2 = 1.5;

  }
  if(level ===13 & keyCode === 90) {
    level=10;
    xSpeed3 = 6;
    xSpeed4 = 6;
  }
}
