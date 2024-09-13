$(document).ready(function() { 

  var $window = $(window),
      $body = $('body');

  // Parallax background scrolling (You can remove this section if you don't need the parallax effect)
  $window.scroll(function() {
// Parallax background scrolling
    var y = $window.scrollTop(),
        starsOrigo = $window.width() / 2;

    var rotate = 'rotate('+ Math.min(45 + y / 32, 60) +'deg)';
    $stars.eq(0).css('transform', 'translateY('+ (y / 2.56) +'px) translateZ(0) ' + rotate);
    $stars.eq(1).css('transform', 'translateY('+ (y / 2.14) +'px) translateZ(0) ' + rotate);
    $stars.eq(2).css('transform', 'translateY('+ (y / 1.75) +'px) translateZ(0) ' + rotate);
  }).triggerHandler('scroll');

  // Generate random stars
  function generateStars(numStars) {
    for (var i = 0; i < numStars; i++) {
      var $star = $('<div class="stars"></div>');

      // Random position within the viewport
      $star.css({
        left: Math.random() * 100 + '%', 
        top: Math.random() * 100 + '%'
      });

      // Randomize animation timing
      $star.css('--random-duration', Math.random());
      $star.css('--random-delay', Math.random());

      $body.append($star);
    }
  }

  generateStars(100); // Create 100 stars (adjust as needed)

});
