$(document).ready(function() {
  $("#submit").click(function() {
    
    var string = "5";
    var number = parseInt(string);
    var count = 1;
    var value = "";


    while (count <= number) {
      if (count % 3 === 0 && count != 15) {
        value = "ping";
      } else if (count % 5 === 0 && count != 15) {
        value = "pong";
      } else if (count % 15 === 0) {
        value = "ping-pong";
      } else {
        value = count;
      }
      count+= 1;
      $("#populateUL").append("<li>" + value + "</li>");
    }
  });
});