$(document).ready(function () {
  setTimeout(function () {
    $(".loader").fadeOut();
  }, 0);

  $(".next1").click(function () {
    $(".quiz__main__step1").delay(200).fadeOut();
    $(".quiz__main__logo").delay(200).fadeOut();
    $(".quiz__main__item1").delay(200).fadeOut();
    $(".quiz__main__quiz").delay(200).fadeOut();
    $(".quiz__main__item2").delay(200).fadeOut();
    $(".quiz__main__item3").delay(200).fadeOut();
    $(".quiz__main__item4").delay(200).fadeOut();
    $(".quiz__main__cta").delay(200).fadeOut();
  });
  $(".next2").click(function () {
    if (
      $('input[name="radios1"]:checked').val() != null &&
      $('input[name="radios2"]:checked').val() != null &&
      $('input[name="rating1"]:checked').val() != null
    ) {
      $(".quiz__main__step2").delay(200).fadeOut();
    } else {
      // alert("Quiz harus diisi semua");
      $(".error").addClass("null").delay(200);
      setTimeout(function () {
        $(".error").removeClass("null");
      }, 2000);
    }
  });
  $(".next3").click(function () {
    if ($("#q6").val() != "") {
      $(".quiz__main__step3").delay(200).fadeOut();
    } else {
      // alert("Quiz harus diisi semua");
      $(".error").addClass("null").delay(200);
      setTimeout(function () {
        $(".error").removeClass("null");
      }, 2000);
    }
  });
  $(".nextb3").click(function () {
    $(".quiz__main__step2").delay(200).fadeIn();
    $(".step3__content__btnb--n").addClass("active_btn");
    $(".step2__content__btn--n").addClass("active_btnb");
  });
  $(".nextb4").click(function () {
    $(".quiz__main__step3").delay(200).fadeIn();
    $(".step4__content__btnb--n").addClass("active_btn");
    $(".step3__content__btn--n").addClass("active_btnb");
  });
});
