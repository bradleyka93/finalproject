$(document).ready(function (){

  $("#notplaying").on("click", function (){
    $('.modal-background').css('display', 'flex').show();
  });

  $('#close').on('click', function(){
    $('.modal-background').hide();
  });

  $("#playgame").on('click', function(){
    window.location="../question_page/index.html"
  });
});
