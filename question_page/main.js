$(document).ready(function (){
  $("#ques-0").removeClass("ques");

  $('.btn-dark').click(function(e){
      e.preventDefault();
      $('.btn-dark').removeClass('active');
      $(this).addClass('active');
      if ($(this).parent().hasClass('true')) {
        $('#modal-0').css('display', 'flex').show();
          $('#nextquestion-0').on('click',function(){
            $('#modal-0').hide(), function(){
            $("#ques-0").addClass("ques");
            $("#ques-1").removeClass("ques");
        })
      }
      else if ($(this).parent().hasClass('true-1')) {
        $('#modal-1').css('display', 'flex').show();
          $('#nextquestion-1').on('click',function(){
            $('#modal-1').hide()
            $("#ques-1").addClass("ques");
            $("#ques-2").removeClass("ques");
        })
      }
      else if ($(this).parent().hasClass('true-2')) {
        $('#modal-2').css('display', 'flex').show();
          $('#nextquestion-2').on('click',function(){
            $('#modal-2').hide();
            $("#ques-2").addClass("ques");
            $("#ques-3").removeClass("ques");
        })
      }
      else if ($(this).parent().hasClass('true-3')) {
        $('#modal-3').css('display', 'flex').show();
          $('#nextquestion-3').on('click',function(){
            $('#modal-3').hide();
            $("#ques-3").addClass("ques");
            $("#ques-4").removeClass("ques");
        })
      }
      else if ($(this).parent().hasClass('true-4')) {
        $('#modal-4').css('display', 'flex').show();
          $('#finalquestion').on('click',function(){
            window.location="../homepage/index.html"
        })
      }
      else {
        $('#modal-fail').css('display', 'flex').show();
          $('#close').on('click', function (){
            window.location="../homepage/index.html"
          })

      }
    });
    });
