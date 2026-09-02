// =========================================================================================
//     Company      : Digital Advertising Division - KG Media | Kompas Gramedia
//     Document     : JS
//     Author       : Pramuda Angga Aditya - IOBITDEV - iobit.dev
//     Project Name : Involve Cewekbanget GRID
//     Date         : March 24th, 2020
// =========================================================================================

$(document).ready(function () {
  // s preload
  if (
    $(window).load(function () {
      $("#preloader").fadeOut("slow", function () {
        $(this).remove();
      });
    })
  )
    // e preload

    // s backtotop
    var btn = $(".backtotop");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      btn.addClass("backtotop--show");
    } else {
      btn.removeClass("backtotop--show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  // e backtotop

  // S Parallax Mouse Cover
  var currentX = "";
  var currentY = "";
  var movementConstant = 0.012;
  $(document).mousemove(function (e) {
    if (currentX == "") currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;
    if (currentY == "") currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;
    $(".parallax div").each(function (i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
      var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
      var newY = $(el).position().top + movementy;
      $(el).css("left", newX + "px");
      $(el).css("top", newY + "px");
    });
  });
  // E Parallax Mouse Cover
});
