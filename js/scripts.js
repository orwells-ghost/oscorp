$(function() {
  const $navbar = $('.header__nav'), $navList = $('.header__nav-links'), $logo = $('.header__nav-logo'),      $linksWithoutLogo = $navList.children('li').children('a'), $linksWithLogo = $.merge($logo, $linksWithoutLogo), $scrollBox = $('.scroll-box'), $sections = $('section'), $portfolioLinks = $('.portfolio__button'), $portfolioItems = $('.portfolio__item'), $aboutBtn = $(".about__btn"), $aboutTeam = $(".about__team");

  // add active-link class to home link right away
  $linksWithoutLogo.eq(0).addClass('active-link');
  // Hide team area by default
  $aboutTeam.toggle();

  $(window).on('scroll', function() {
    // get the y scroll distance of both document and body 
    let $docPos = $(document).scrollTop(), $bodyPos = $('body').scrollTop(), curPos = $(this).scrollTop(), navHeight = $navbar.outerHeight();

    // if the user has scrolled more than 25px down
    if ( $docPos > 25 || $bodyPos > 25 ){

      // fade in scroll box
      $scrollBox.css('opacity', '1');
      // change logo color
      $logo.css('color', '#26b18a');

      // navbar changes on scroll
      $navbar.css({
        'padding': '1.7rem 6.4rem',
        'background-color': '#fff'
      });
      $navList.css('top', "7.15rem");

      // if the window width is greater than 1000px breakpoint, change link color to black on scroll
      if ( $(window).width() >= 1000 ){
        $linksWithoutLogo.css('color', '#000');
      } else {
        $linksWithoutLogo.css('color', '#fff');
      }
    } else {

      //change back to normal
      $navbar.css({
        'padding': '3.4rem 6.4rem',
        'background-color': 'transparent'
      });
      $navList.css('top', '10.5rem');
      $logo.css('color', '#fff');

      // if window width greater than but scroll is less than 25px, change links to white
      if ( $(window).width() >= 1000 ){
        $linksWithoutLogo.css('color', '#fff');
      }
    }

    // if scroll position is less than 550px but more than 0px add active link to home and remove from about
    if ( ($docPos < 550 && $docPos > 0)  || ($bodyPos < 550 && $bodyPos > 0) ) {
      $linksWithoutLogo.eq(0).addClass('active-link');
      $linksWithoutLogo.eq(1).removeClass('active-link');
    } else {
      $linksWithoutLogo.eq(0).removeClass('active-link');
    }

    // For each section
    $sections.each(function() {
      // let top = the current element's top position relative to top left hand corner of document - navHeight - 75px, bottom = top + height including padding and border of current section.
      let top = $(this).offset().top - navHeight - 75, bottom = top + $(this).outerHeight() - 75;

      // if current scroll position is greater than top and less than bottom
      if (curPos >= top && curPos <= bottom) {
        // remove active-link class from all links
        $linksWithoutLogo.removeClass('active-link');
        // find link with hash link of current section's ID. 
        $navbar.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-link');
      }
    });
  });

  // When scroll box is clicked, animate scrollTop of page slowly
  $scrollBox.on('click', function() {
    $('html, body').animate({ scrollTop: 0}, 'slow'); // html, body need for chrome & safari
    return false;
  });

  // Portfolio Filter
  $portfolioLinks.on('click', function(event) {
    // get clicked link and its data-rel value
    let $this = $(this), category = $this.attr('data-rel');

    // add/remove active-filter link class
    $portfolioLinks.removeClass('active-filter');
    $this.addClass('active-filter');

    if ( category != 'all') {
      // filter portfolioItems by getting just data-filter category, then fade out & remove class
      let filterItems = $portfolioItems.filter('[data-filter="' + category + '"]');
      $portfolioItems.not('.' + category).fadeOut().removeClass('scale-selection');
      
      // after fading out others, fade in filtered items
      setTimeout(function() {
        filterItems.fadeIn().addClass('scale-selection').fadeTo(100, 1);
      }, 400);
    } else {
      // if 'all' is pressed, fadeIn all
      $portfolioItems.fadeIn().addClass('scale-selection').fadeTo(300, 1);
    }

  });

  // when team button pressed, toggle display
  $aboutBtn.click(function(event) {
    event.preventDefault();
    $aboutTeam.slideToggle()
  });

  // Owl carousel
  $('.owl-carousel').owlCarousel({
    center: true,
    items: 1,
    center:true,
    dots: true,
  });
});