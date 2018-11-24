//variable declarations
var guesses = new Array();
var guesses =[];
var Random = "";
function Start(){
  //generate a random number between 1 and 4
  var RandNum = Math.floor((Math.random()*4) + 1 );
  //assigns same value of RandNum to Random
  Random = RandNum;
  //number = 1 colour = red
  if (RandNum == 1) {
      document.getElementById("output").innerHTML = "Red";
  }
  //number = 2 colour = green
  else if (RandNum == 2){
    document.getElementById("output").innerHTML = "Green";
  }
  //number = 3 colour = blue
  else if (RandNum == 3){
    document.getElementById("output").innerHTML = "Blue";

  }
  //number = 4 colour = yellow
  else if (RandNum == 4){
    document.getElementById("output").innerHTML = "Yellow";

  }
  setTimeout(function(){
  document.getElementById("output").innerHTML = "";
}, 200);
  //passes value of Random to global variable so it can be
  //refernced in other functions
  return Random;
}


function CallRed(){
  //determines if the button pressed matches the colour
  if (Random == 1) {
    guesses.push("Red");
    return Start();
  }
  //calls end function if it does not match
  else{
    return End();
  }
}

function CallGreen(){
  //determines if the button pressed matches the colour
  if (Random == 2) {
    guesses.push("Green");
    return Start();
  }
  //calls end function if it does not match
  else{
    return End();
  }
}
function CallBlue(){
  //calls end function if it does not match
  if (Random == 3) {
    guesses.push("Blue");
    return Start();
  }
  else{
    return End();
  }
}
function CallYellow(){
  //calls end function if it does not match
  if (Random == 4) {
    guesses.push("Yellow");
    return Start();
  }
  //calls end function if it does not match
  else{
    return End();
  }
}

function End(){
  //displays the correct guesses made by the user before making the wrong guess
  document.getElementById("output").innerHTML = ("Correct answers: " + guesses) ;
}
