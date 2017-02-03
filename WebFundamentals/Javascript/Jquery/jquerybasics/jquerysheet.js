$(document).ready(function(){
  $("#clickbtn").click(function(){
    alert('You Clicked Me!');
  });
  $("#hidefunc").click(function(){
    $("#hidefuncp").hide("slow");
    });
  $("#showfunc").click(function(){
    $("#showfuncp").show("slow");
  });
  $("#togglefunc").click(function(){
    $("#togglepic").toggle()
  });
  $("#slidedown").click(function(){
    $("#slidedownp").slideDown();
  });
  $("#slideupfunc").click(function(){
    $("#slideupp").slideUp("slow");
  });
  $("#slidetogglefunc").click(function(){
    $("#slidetogglep").slideToggle("slow");
  });
  $("#fadeinfunc").click(function(){
    $(".fadeinfunc").fadeIn();
  });
  $("#fadeoutfunc").click(function(){
    $(".fademeout").fadeOut("slow");
  });
  $("#addclassfunc").click(function(){
    $(".addtheclass").addClass("addclass");
  });
  $("#beforefunc").click(function(){
    $(".beforefunc").before("You Are ");
  });
  $("#afterfunc").click(function(){
    $(".afterfunc").after(", You Are");
  });
  $("#appendfunc").click(function(){
    $("#appendfuncp").append("<strong>R-L-R-R-L-R-L-L</strong>");
  });
  $("#htmlfunc").click(function(){
    $("#htmlfuncp").html("<h1>Now Im Here!</h1>");
  });
  $("#attrfunc").click(function(){
    $("#attrfuncp").html("<h3> We Did It Reddit!</h3>");
  });
  $( "#valfunc" )
  .keyup(function() {
    var value = $( this ).val();
    $( "#valfuncp" ).text( this );
  });
  $("#textfunc").click(function(){
    $("#textfuncp").text("Now The Text Has Changed!");
  });
  $("#datafunc").click(function(){
    var lol = $("#datafuncp").data("name");
    alert(lol);
  });
  });
