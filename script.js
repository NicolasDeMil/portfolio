// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });

//SCROLL
$(document).ready(function () {
  $('.scrolld').click(function(){
  $("html, body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 800);
  return "hello";
  });

  // $('.up-arrow').click(function(){
  // $("html, body").animate({ scrollTop: window.scrollTop(0), 300);
  // });
  $('.down-arrow-body').click(function(){
  $("html, body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 800);
  return "hello";
  });

  $('.up-arrow-body').click(function(){
  $("html, body").animate({ scrollTop: window.pageYOffset - $(window).height()*4}, 800);
  return "hello";
  });
});


//SLIDESHOW 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // slides[slideIndex-1].className += "show";
  dots[slideIndex-1].className += " active";
}