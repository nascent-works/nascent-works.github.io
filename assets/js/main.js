// When the user scrolls the page, execute myFunction
window.onscroll = function () { scroll_check() };

// Get the navbar
var navbar = document.getElementById("main-nav");

// Get the offset position of the navbar
var sticky = 100;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroll_check() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {

  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  var owl = $('.owl-carousel').owlCarousel(
    { items: 1, margin: 60, center: true, }
  );
  $('.custom_btn_left').click(function () {
    owl.trigger('prev.owl.carousel', [750]);

  });
  $('.custom_btn_right').click(function () {
    owl.trigger('next.owl.carousel', [750]);

  })
  $("body").scrollspy({ target: "#main-nav", offset: 200 });
  $('.service_nav_link').click(function (e) {
    var id = $(this).attr('data-target');
    $('html').animate({
      scrollTop: $("#service_nav").offset().top - 100 // Means Less header height
    }, 0, function(){
      setTimeout(function(){ $('#'+ id ).collapse('toggle'); }, 300);


    });

  });
});