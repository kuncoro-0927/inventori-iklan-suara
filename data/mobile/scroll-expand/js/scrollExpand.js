var flipscroll__container = document.getElementById("flipscroll__container");
var flipscroll__b = document.getElementById("flipscroll__b");
var flipscroll__a = document.querySelector(".flipscroll__a--gate");
var img_banner = document.getElementById("flipscroll_img");
var img_banner_b = document.getElementById("flipscroll_img_b");
var closebanner = document.querySelector(".closebanner");

function sbScroll() {
  var position = flipscroll__container.getBoundingClientRect();
  if (position.top >= 0 && position.bottom <= 600) {
    console.log("open");
    flipscroll__b.classList.remove("show");
  } else {
  }
}

window.addEventListener("scroll", sbScroll);

closebanner.addEventListener("click", function () {
  window.removeEventListener("scroll", sbScroll);
  flipscroll__b.style.height = "0";
  setTimeout(function () {
    flipscroll__b.style.display = "none";
  }, 1000);
});
flipscroll__a.addEventListener("click", function () {
  flipscroll__b.style.display = "block";
  setTimeout(function () {
    flipscroll__b.style.height = "250px";
  }, 250);
});
