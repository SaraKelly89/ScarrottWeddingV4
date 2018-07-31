
$( document ).ready(function() {
///first we need to tell our skript to listen for a mouse click on the burger button.
  $(".burger-button").click(function(){
    $(".burger-menu").slideToggle();
    $(".burger-button").toggleClass("active");
  });
$(".burger-menu").click(function(){
  $(".burger-button").toggleClass("active");
  $(".burger-menu").slideToggle();
});

/*$(".owl-carousel").owlCarousel();
  loop:true,
  margin:10,
  nav:true,
  responsiveClass:True,
  responsive:{
      // breakpoint from 0 up
      0 : {
          items:1
      },
      // breakpoint from 480 up
      469 : {
          items:2
      },
      // breakpoint from 768 up
      1000 : {
        items:3
      }
  }*/

});
