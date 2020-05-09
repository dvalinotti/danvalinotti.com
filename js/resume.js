
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
var textTypingAnimation = new TextTypingAnimation(document.getElementById("tta-1"));
textTypingAnimation
  .go({
    text: 'Software Engineer',
    delay: 100,
    duration: 1500
  });
var textTypingAnimation2 = new TextTypingAnimation(document.getElementById("tta-2a"));
setTimeout(function() {
  textTypingAnimation2
    .go({
      text: '> ',
      duration: 1
    });
}, 1750);
var textTypingAnimation3 = new TextTypingAnimation(document.getElementById("tta-2"));
setTimeout(function() {
  textTypingAnimation3
    .go({
      text: 'I am a Full-Stack Software Engineer with a focus on front-end development and a passion for UX/UI Design. ' +
        'Adaptable, design oriented, and user-focused applications are my specialty, along with strong architecture and ' +
        'solutions skills.',
      duration: 3000
    });
}, 2000);
setTimeout(function() {
  var toc = ['skills', 'projects', 'interests', 'experience', 'education', 'blog'];
  for (var i = 0; i < toc.length; i++) {
    var textTypingAnimation5 = new TextTypingAnimation(document.getElementById("nav-link-" + toc[i]));
    textTypingAnimation5
      .go({
        text: '\n' + (i + 1) + '.\t  ' + toc[i].charAt(0).toUpperCase() + toc[i].substring(1),
        duration: 1000
      });
  }
}, 5000);
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
