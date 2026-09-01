var $animation_elements = $(".elasticstack__item:first-child");
var $swipe_icon = $(".swipe__icon");
var $window = $(window);

var swipePlayed = false;

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  // Card animation
  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });

  // Swipe icon hanya sekali
  if (!swipePlayed) {
    var $element = $swipe_icon;

    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      swipePlayed = true;

      $element.addClass("show-swipe");

      // Setelah animasi selesai, sembunyikan
      setTimeout(function () {
        $element.removeClass("show-swipe");
        $element.hide();
      }, 4000);
    }
  }
}

$window.on("scroll resize", check_if_in_view);

$window.trigger("scroll");
