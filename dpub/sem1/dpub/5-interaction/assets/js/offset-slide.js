$( document ).ready(function() {
    
$('.nav-contents').click(function() {
  $('.contents').addClass('left');
});

$('.close').click(function() {
  $('.contents').removeClass('left');
});

setTimeout(function(){
    $('.image-container1').addClass('active')
},1000);

setTimeout(function(){
    $('.image-container2').addClass('active')
},2000);

















});