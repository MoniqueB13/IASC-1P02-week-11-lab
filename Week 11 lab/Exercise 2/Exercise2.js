var Nouns = new Array();
var Nouns =["Baboon", "Hippopotamus", "Croc","Aluminum", "Duck"];
var Adjs = new Array();
var Adjs =["Enormous", "Tranquil", "Glowing", "Funny", "Shiny"];

function Generate(){
  //generate a random number between 1 and 4
  var RandNoun = Math.floor(Math.random()*5);
  var RandAdj = Math.floor(Math.random()*5);


  document.getElementById("output").innerHTML  += "What a(n) " + Adjs[RandAdj] +  " " + Nouns[RandNoun] + "<br/>" + "<br/>";
}
