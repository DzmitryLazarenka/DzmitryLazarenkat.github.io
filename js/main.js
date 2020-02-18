'use strict';
//header onscroll
(function() {
  var header = document.querySelector('.header');

  window.onscroll = function() {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
})();
//end header onscroll
(function() {
  var burgerItem = document.querySelector('.burger');
  var menu = document.querySelector('.sub_header');
  var closeBurgerItem = document.querySelector('.header_nav_close');
  burgerItem.addEventListener('click', function() {
    menu.classList.add('sub_menu-animation');
  });
  closeBurgerItem.addEventListener('click', function() {
    menu.classList.remove('sub_menu-animation');
  });
})();

//end onscroll
let element = document.getElementById("ulProp");

element.addEventListener('mouseover', function(event) {
  let target = event.target;
  let mainTarget = target.previousElementSibling;
  mainTarget.classList.add('rectangle_in_property_active');
});
element.addEventListener('mouseout', function() {
  let target = event.target;
  let mainTarget = target.previousElementSibling;
  mainTarget.classList.remove('rectangle_in_property_active');
});

//only 1 checbox
$('form').eq(0).on("change", function(e) {
  $('input[name^=field]').each(function() {
    if (e.target != this)
      this.checked = false;
  });
})

$('form').eq(0).on('submit', function() {
  return $('input[name^=field]:checked:enabled').length == 1;
});

$('.second_check').eq(0).on("change", function(e) {
  $('input[name^=al]').each(function() {
    if (e.target != this)
      this.checked = false;
  });
})

$('form').eq(0).on('submit', function() {
  return $('input[name^=al]:checked:enabled').length == 1;
});
//end

//slider
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
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//end slider
//animation image in section two
let ourfindingElement = document.getElementById("statistics");

ourfindingElement.addEventListener('mouseover', function(event) {
  let target = event.target;

  if (event.target.classList.contains("box_with_statistics")) {
    let mainTarget = target.lastElementChild;
    mainTarget.classList.add('squaretworig');
    mainTarget.classList.remove('squaretwolef');
  }
});

ourfindingElement.addEventListener('mouseout', function() {
  let target = event.target;
  if (event.target.classList.contains("ton")) {
    let mainTarget = target.parentElement;
    mainTarget.classList.add('squaretwolef');
    mainTarget.classList.remove('squaretworig');
  }
});
//End animation image in section two
