var firstPlace = ["-", "I", "II", "III","IV","V","VI","VII","VIII","IX"];
var secondPlace = ["-","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];

var romanOutput = [];

var convert = function(input){
  // split input
  var splitInput = input.split("");
  // reverse order
  var reversedInput = splitInput.reverse();


  if (reversedInput.length === 1) {
    reversedInput.forEach(function(num) {
      num = firstPlace[num];
      romanOutput.push(num);
    });
  } else if (reversedInput.length === 2) {
    reversedInput.forEach(function(num) {
      num = firstPlace[num];
      romanOutput.push(num);
    });
  } else if (reversedInput.length === 3) {
    reversedInput.forEach(function(num) {
      num = firstPlace[num];
      romanOutput.push(num);
    });
  } else {
    reversedInput.forEach(function(num) {
      num = firstPlace[num];
      romanOutput.push(num);
    });
  }

  // join numerals from array to a string
  var joinedRoman = romanOutput.reverse().join("");
  alert(joinedRoman);
}





$(document).ready(function(){
$(".form1").submit(function(event){
  event.preventDefault();
  var userInput =$("#user-input").val();
  convert(userInput);
});
});
