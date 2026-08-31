window.addEventListener("DOMContentLoaded", function () {
  var insliderTop = document.querySelector(".insliderTop");
  //kompas
  var banner1 = document.querySelector(".banner1");
  var premium_div = document.querySelector(".premium_div");
  var bapps = document.querySelector(".bapps ");

  //tribun
  var toptribun = document.querySelector(".theader");

  var inslider = document.querySelector(".inslider");
  var closeBanner = document.querySelector(".inslider__close");

  //kompascom only : top sticky condition
  if (insliderTop != null && banner1 != null) {
    banner1.classList.add("addInslider");
    insliderTop.classList.add("insliderTop__kompas");
  }
  if (insliderTop != null && premium_div != null) {
    premium_div.classList.add("addInslider");
    insliderTop.classList.add("insliderTop__kompas");
  }

  //tribun
  if (toptribun != null) {
    insliderTop.classList.add("insliderTop__tribun");
  }

  function postElement() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      inslider.classList.add("inslider--play");
    } else {
      inslider.classList.remove("inslider--play");
    }

    if (insliderTop != null) {
      //setDomain();
    }
  }

  window.addEventListener("scroll", postElement);

  closeBanner.addEventListener("click", function () {
    inslider.classList.remove("inslider--play");
    inslider.classList.add("inslider--stop");
  });
});
