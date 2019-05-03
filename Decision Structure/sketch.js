let choices = ['Rock','Paper','Scissors']
let userChoice;
let keyPress = false;

function setup() {

  createCanvas(windowWidth,windowHeight);
  background(0,140,255);

}

function draw() {
  if (keyPress === false) {
    fill(0);
    textSize(40);
    text('YOU',width/4-30,50);
    fill(255,0,0);
    textSize(80);
    text('VS',width/2-50,70);
    fill(0);
    textSize(40);
    text('CPU',950,50);
    rect(width/2,0,5,900);

  }

}

function keyPressed(){
/*------------------ROCK--------------------------*/
  if (keyCode === 82) {
    clear();
    keyPress = true;
    print("Rock!")
    userChoice = random(choices)
    if (userChoice === 'Rock') {
    background(0,140,255);
    textSize(40);
    text('Rock',width/4-20,height/2);
    text(userChoice,950,height/2);
    textSize(50);
    text('YOU TIED',width/2-45,height/2);
    }//end if
    else if (userChoice === 'Paper') {
    background(255,0,0);
    textSize(40);
    text('Rock',width/4-20,height/2);
    text(userChoice,950,height/2);
    textSize(50);
    text('YOU LOSE',width/2-45,height/2);
    }//end if
    else if (userChoice === 'Scissors') {
    background(0,255,0);
    textSize(40);
    text('Rock',width/4-20,height/2);
    text(userChoice,950,height/2);
    textSize(50);
    text('YOU WIN',width/2-45,height/2);
    }//end if
  }//end key if

  /*------------------PAPER--------------------------*/
    if (keyCode === 80) {
      clear();
      keyPress = true;
      print("Paper!")
      userChoice = random(choices)
      if (userChoice === 'Rock') {
      background(0,255,0);
      textSize(40);
      text('Paper',width/4-20,height/2);
      text(userChoice,950,height/2);
      textSize(50);
      text('YOU WIN',width/2-45,height/2);
    }//end if
      else if (userChoice === 'Paper') {
      background(0,140,255);
      textSize(40);
      text('Paper',width/4-20,height/2);
      text(userChoice,950,height/2);
      textSize(50);
      text('YOU TIED',width/2-45,height/2);
    }//end if
      else if (userChoice === 'Scissors') {
      background(255,0,0);
      textSize(40);
      text('Paper',width/4-20,height/2);
      text(userChoice,950,height/2);
      textSize(50);
      text('YOU LOSE',width/2-45,height/2);
      }//end if
    }//end key if

    /*------------------SCISSORS--------------------------*/
      if (keyCode === 83) {
        clear();
        keyPress = true;
        print("Scissors!")
        userChoice = random(choices)
        if (userChoice === 'Rock') {
        background(255,0,0);
        textSize(40);
        text('Scissors',width/4-20,height/2);
        text(userChoice,950,height/2);
        textSize(50);
        text('YOU LOSE',width/2-45,height/2);
        }//end if
        else if (userChoice === 'Paper') {
        background(0,255,0);
        textSize(40);
        text('Scissors',width/4-20,height/2);
        text(userChoice,950,height/2);
        textSize(50);
        text('YOU WIN',width/2-45,height/2);
        }//end if
        else if (userChoice === 'Scissors') {
        background(0,140,255);
        textSize(40);
        text('Scissors',width/4-20,height/2);
        text(userChoice,950,height/2);
        textSize(50);
        text('YOU TIED',width/2-45,height/2);
        }//end if
      }//end key if


}//end function
