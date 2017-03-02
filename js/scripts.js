/*
* Application: Ping-Pong
* File Name: scripts.js
* Programmer: Ryan Jones
* Version: 02/24/2017
*/

$(document).ready(function() {
  
  /**** Back End Logic ****/

  function countUp(number) {
      var array = [];
      var count = 1;
      while(count <= number) {
        array.push(count);
        count++;
      }
      return array;
  }
  
  /**** Front End Logic ****/
  
  var isClicked = false;
  
  $("#submit").click(function(event) {
    
    event.preventDefault();
    
    var userNumber = parseInt($("#userInput").val());
    
    var numberArray = countUp(userNumber);
    
    if (!isClicked) {
      $("#populateUL").html("");
      isClicked = true;
    } else {
      $("#populateUL").html("");
      isClicked = false;
    }
    
    if (!$.isNumeric(userNumber)) {
      alert("Invalid Input");
    }
    
    for (i = 1; i <= numberArray.length; i++) {

      if (i % 15 === 0) {
        value = "ping-pong";
      } else if (i % 5 === 0) {
        value = "pong";
      } else if (i % 3 === 0) {
        value = "ping";
      } else {
        value = i;
      }
      $("#populateUL").append("<li>" + value + "</li>");
    }
    
  });
});