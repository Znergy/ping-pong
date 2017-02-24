/*
* Application: Ping-Pong
* File Name: scripts.js
* Programmer: Ryan Jones
* Version: 02/24/2017
*/

$(document).ready(function() {
  
  /**** Back End Logic ****/
  
  var isClicked = false;
  
  function doSomething(string) {
    var number = parseInt(string);
    var count = 1;
    var value = "";

    while (count <= number) {
      
      if (count % 15 === 0) {
        value = "ping-pong";
      } else if (count % 3 === 0) {
        value = "ping";
      } else if (count % 5 === 0) {
        value = "pong";
      } else {
        value = count;
      }
      count+= 1;
      $("#populateUL").append("<li>" + value + "</li>");
    }
  }
  
  /**** Front End Logic ****/
  
  $("#submit").click(function(event) {
      event.preventDefault();
      var string = $("#userInput").val();
    if (!isClicked) {
      $("#populateUL").html("");
      isClicked = true;
    } else {
      $("#populateUL").html("");
      isClicked = false;
    }
    doSomething(string);
  });
});