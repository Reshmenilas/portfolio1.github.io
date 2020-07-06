$(document).ready(function(){
  // sticky menu jquery
  $(window).scroll( function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 100)
    
  }); 
  // menu
 // Add active class to the current button (highlight it)
 var header = document.getElementById("navbar");
 var btns = header.getElementsByClassName("nav-link");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", "");
   this.className += " active";
   });
 } 
  //count up
 $('.counter').countUp();

  	// mixitup js
    var mixer = mixitup('.grid');
    // magnific popup js
     $('.pop_up').magnificPopup({
        
      type: 'image',
      gallery: {
         enabled: true
      },
      
      });



});

$(function(){
  "use strict";
  var myWindow=$(window);
  myWindow.on('scroll',function(){
  $(".prog_item span").each(function(){
  var bottom_of_object=$(this).offset().top+$(this).outerHeight();
  var bottom_of_window=$(window).scrollTop()+$(window).height();
  var myVal=$(this).attr('data-value');
  if(bottom_of_window>bottom_of_object){
   $(this).css({width:myVal});
  }
 
 });
 
 });
});
