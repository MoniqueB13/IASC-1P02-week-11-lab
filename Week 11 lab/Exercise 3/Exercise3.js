
function Count(){
  //retrieves user inputted number
  var Num = document.getElementById("Num").value;
  //counts from 0 to user inputted number
  for (i=0;i<=Num;i++){
    //diplays number for every pass of the function
    document.getElementById("output").innerHTML += i + "<br/>" + "<br/>";
  }

}
