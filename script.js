$(function(){


  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
    });

    $('#close-modal').click(function() {
      $('#signup-modal').fadeOut();
    });
  






$('.faq-list-item').click(function(){
var $answer=$(this).find('.answer');

if($answer.hasClass('open')){
$answer.removeClass('open');
$answer.slideUp();
$(this).find('span').text('+');


}else{
  $answer.addClass('open');
  $answer.slideDown();
  $(this).find('span').text('-');

}

});
  





  $('.menu-btn').click(function(){
    $('.menu').toggleClass('is-active');
  });






});