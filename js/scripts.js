var firstPlace = ["-", "I", "II", "III","IV","V","VI","VII","VIII","IX","X"];










$(document).ready(function(){
$(".form1").submit(function(event){
  event.preventDefault();
  var userInput =parseInt($("#user-input").val());
  alert(firstPlace[userInput]);
});
});
