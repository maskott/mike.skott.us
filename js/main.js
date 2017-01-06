---
layout: null
---
$(document).ready(function () {
  var backgrounds = ['atlanta.jpg', 'marta.jpg', 'power.jpg', 'wheel.jpg', 'leaf.jpg'];
  $('.panel-cover--background').css('background-image', 'url({{ site.github.url }}/images/' + backgrounds[Math.floor(Math.random() * backgrounds.length)] + ')');

  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return false;
    currentWidth = $('.panel-cover').width();
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.content-wrapper').addClass('animated slideInRight');
    if (currentWidth > 960) {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html' && window.location.href !== '{{site.github.url}}/') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  })

})
