window.addEventListener("load", function () {
  $("body").prepend($("#div-Popup"));
  $("body").addClass("liftdown");
  $(".containerliftDown").css({
    display: "block",
  });
  $("#div-Right-Skin, #div-Left-Skin").css({
    position: "absolute",
  });

  var ldContainer = $(".containerliftDown");

  // close
  $(".liftDownClose").click(function () {
    $(".containerliftDown, .liftDownClip").animate({ height: "0" }, 500);
    $(".thead").css({
      position: "fixed",
    });
    $("#div-Right-Skin, #div-Left-Skin").css({
      position: "fixed",
    });
    $("body").removeClass("liftdown");
    $(".liftDownClose").hide();
    $(".containerliftDown").remove();
  });

  // scroll
  $(window).scroll(function () {
    var ldHeight = $(ldContainer).outerHeight();
    var scrollpos = $(window).scrollTop();
    var hblock = $(".thead").outerHeight();

    // scroll header
    if (scrollpos > ldHeight + hblock) {
      $(".thead, #div-Right-Skin, #div-Left-Skin").addClass("liftdown__on");
      $(".liftDownClose").hide();
    } else {
      $(".thead, #div-Right-Skin, #div-Left-Skin").removeClass("liftdown__on");
      $(".liftDownClose").show();
    }
  });
});
