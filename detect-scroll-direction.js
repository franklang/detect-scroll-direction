/*
 * Detect scroll direction (up/down)
 */
var scrollDir = 0;
$(window).scroll(function () {
  var curScrollDir = $(this).scrollTop();
  if (curScrollDir > scrollDir) {
    /* Scrolling Down */
    $('html').attr('data-scroll-direction', 'down');
  } else {
    /* Scrolling Up */
    $('html').attr('data-scroll-direction', 'up');
  }
  scrollDir = curScrollDir;
});
