// Slick function creates carousel effect for pictures on Jumbotron
$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

var userScroll = 0;
