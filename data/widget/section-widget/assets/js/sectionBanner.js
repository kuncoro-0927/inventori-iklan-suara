var sectionBanner = document.querySelector(".scrollsectionBanner");
var sectionBanner__bgColor = document.querySelector(".sectionBanner__bgColor");
var sectionBanner__layer = document.querySelector(".sectionBanner__layer");

sectionBanner.onscroll = function () {
  var elmnt = document.querySelector(".scrollsectionBanner");
  var elmntScroll = elmnt.scrollLeft;
  console.log(elmntScroll);

  if (elmntScroll > 50) {
    console.log("asasasa");
    sectionBanner__bgColor.classList.add("play");
    sectionBanner__layer.classList.add("play");
  } else {
    console.log("babab");
    sectionBanner__bgColor.classList.remove("play");
    sectionBanner__layer.classList.remove("play");
  }
};
