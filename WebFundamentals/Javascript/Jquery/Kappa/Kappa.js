$(document).ready(function(){
  $("img").click(function(){
    $(this).hide("slow");
});
  $("#restore").click(function(){
    $("img").fadeIn("slow");
  });
});
