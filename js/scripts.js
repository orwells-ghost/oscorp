window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var links = document.getElementById('navbar').getElementsByTagName('a');
  var navLinks = document.getElementById('navLinks').getElementsByTagName('a');
  
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("navbar").style.padding = "1.7rem 6.4rem";
    document.getElementById("navbar").style.backgroundColor = "#fff";
    document.getElementById('navLinks').style.top = "7.15rem";
    document.getElementById('logo').style.color = "#26b18a";
  } else {
    document.getElementById("navbar").style.padding = "3.4rem 6.4rem";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById('navLinks').style.top = "10.5rem";
  }

  if (document.documentElement.scrollTop < 550) {
    navLinks[0].classList.add('active-link');
    navLinks[1].classList.remove('active-link');
  } else {
    navLinks[0].classList.remove('active-link');
  }
}

var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("header__nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-link");
    current[0].className = current[0].className.replace(" active-link", "");
    this.className += " active-link";
  });
}

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

$('.owl-carousel').owlCarousel({
  center: true,
  items: 1,
  center:true,
  dots: true,
});