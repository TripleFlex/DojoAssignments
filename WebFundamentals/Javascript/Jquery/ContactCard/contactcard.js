$(document).ready(function(){
  var name = "";
  var desc = "";
  $("#btn").click(function(){
    name = $("#first").val() + " " + $("#last").val();
    desc = $("#desc").val();
    $("#cards").append('<div class="card" flip="front"></div>');
    $(".card:last-child").data("flip", {
      front: name,
      back: desc,

    });
    $('.card:last-child').append("<h2>" + name + "</h2>");
    $('.card:last-child').append("<p>Click here for the description!</p>");
    $("input").val("");
    $("textarea").val("");
  });
  $(document).on('click', '.card', function() {
                if ($(this).attr('flip') === 'front') {
                    $(this).attr('flip', 'back');
                    $('h2', this).hide();
                    $('p', this).text($(this).data('flip').back);
                } else {
                    $(this).attr('flip', 'front');
                    $('h2', this).show();
                    $('p', this).text('Click here for the description!');
                }
    });
});
