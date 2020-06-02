$(document).ready(function() {
  $(".dark").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $(".light").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $(".highlight").click(function() {
    $("p#main").toggleClass("box");
  });

});  