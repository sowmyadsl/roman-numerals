var firstPlace = ["-", "I", "II", "III","IV","V","VI","VII","VIII","IX"]; //0-9
var secondPlace = ["-","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];   //10-100
var thirdPlace = ["-","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];    //100-1000
var fourthPlace = ["-","M","MM","MMM"]; //1000-3999
var romanOutput = [];

var convert = function(input){
  var romanOutput = [];
  // split input
  var splitInput = input.split("");

  // check if number is 1, 2, 3, 4 digits
  if (splitInput.length === 1) {
    var fp = splitInput[0];
    var fpRoman = firstPlace[fp];
    romanOutput.push(fpRoman);
  } else if (splitInput.length === 2) {
    var fp = splitInput[1];
    var fpRoman = firstPlace[fp];
    var sp = splitInput[0];
    var spRoman = secondPlace[sp];
    romanOutput.push(fpRoman);
    romanOutput.push(spRoman);
  } else if (splitInput.length === 3) {
    var fp = splitInput[2];
    var fpRoman = firstPlace[fp];
    var sp = splitInput[1];
    var spRoman = secondPlace[sp];
    var tp = splitInput[0];
    var tpRoman = thirdPlace[tp];
    romanOutput.push(fpRoman);
    romanOutput.push(spRoman);
    romanOutput.push(tpRoman);
  }else if (splitInput.length === 4) {
    var fp = splitInput[3];
    var fpRoman = firstPlace[fp];
    var sp = splitInput[2];
    var spRoman = secondPlace[sp];
    var tp = splitInput[1];
    var tpRoman = thirdPlace[tp];
    var fourthp = splitInput[0];
    var fourthpRoman = fourthPlace[fourthp];
    romanOutput.push(fpRoman);
    romanOutput.push(spRoman);
    romanOutput.push(tpRoman);
    romanOutput.push(fourthpRoman);

  }

  // join numerals from array to a string
  var joinedRoman = romanOutput.reverse().join("");
  alert(joinedRoman.replace(/-/g, ""));
}





$(document).ready(function(){
$(".form1").submit(function(event){
  event.preventDefault();
  var userInput =$("#user-input").val();
  convert(userInput);
});
});
