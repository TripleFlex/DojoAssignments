$(document).ready(function(){
  $("#button").click(function(){
    var colname = "<td>"+$("#firstname").val()+"</td>"
    var collast = "<td>"+$("#lastname").val()+"</td>"
    var colemail = "<td>"+$("#email").val()+"</td>"
    var colcontact = "<td>"+$("#contact").val()+"</td>"
    var row = "<tr>"+colname+collast+colemail+colcontact+"</tr>"

    $("table").append(row);
    $("input").val("");
    $(document).on(function(){

    });
  });
});
