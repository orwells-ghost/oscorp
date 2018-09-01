// Detect scroll and change nav and scrollbox
window.onscroll = function() {scrollFunction()};
var navbar = document.getElementById("navbar");
var links = document.getElementById('navbar').getElementsByTagName('a');
var navUL = document.getElementById('navUL');
var navLinks = navUL.getElementsByTagName('a');
var logo = document.getElementById('logo');
var scrollBox = document.getElementById("scrollBox");

function scrollFunction() {
  
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    // Scroll button
    scrollBox.style.opacity = "1"; 
    // setTimeout(function(){ scrollBox.style.opacity = "1"; }, 300);

    // Nav
    navbar.style.padding = "1.7rem 6.4rem";
    navbar.style.backgroundColor = "#fff";
    navUL.style.top = "7.15rem";
    if (screen.width >= 1000) {
      for (var i = 0; i < links.length; i++) {
        if (i === 0) {
          continue;
        } else {
          links[i].style.color = "#000";
        }
      }
    }
    logo.style.color = "#26b18a";
  } else {
      // Scroll box
      scrollBox.style.opacity = "0";

      // Nav
      navbar.style.padding = "3.4rem 6.4rem";
      navbar.style.backgroundColor = "transparent";
      navUL.style.top = "10.5rem";
      if (screen.width >= 1000) {
        for (var i = 0; i < links.length; i++) {
          if (i === 0) {
            continue;
          } else {
            links[i].style.color = "#fff";
          }
        }
      }
  }

  if (document.documentElement.scrollTop < 550) {
    navLinks[0].classList.add('active-link');
    navLinks[1].classList.remove('active-link');
  } else {
    navLinks[0].classList.remove('active-link');
  }
}

// Change nav link active state on click
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("header__nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-link");
    current[0].className = current[0].className.replace(" active-link", "");
    this.className += " active-link";
  });
}

// Change nav link active state based on scroll position
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active-link');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-link');
    }
  });
});

// When the user clicks scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// Own carousel
$('.owl-carousel').owlCarousel({
  center: true,
  items: 1,
  center:true,
  dots: true,
});

// Portfolio Filter
var portfolioItems = document.getElementsByClassName("portfolio__item");

function filterItem(filter){
  for (var i = 0; i < portfolioItems.length; i++){
    if (portfolioItems[i].dataset.filter !== filter){
      portfolioItems[i].classList.add("displayNone");
    } else {
      portfolioItems[i].classList.remove("displayNone");
    }
  }
}

function allFilter(){
  for (var i = 0; i < portfolioItems.length; i++){
    portfolioItems[i].classList.remove("displayNone");
  }
}

var btns = document.getElementsByClassName("portfolio__button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-filter");
    current[0].className = current[0].className.replace(" active-filter", "");
    this.className += " active-filter";
  });
}

// Hide by default
$(".about__team").toggle();

// Show/hide team content
$(document).ready(function() {
 $(".about__btn").click(function(e) {
   e.preventDefault();
  $(".about__team").slideToggle()
 });
});
