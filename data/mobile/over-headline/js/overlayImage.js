var overlayimage = document.querySelector(".overlayimage");
var overlayimage__big = document.querySelector(".overlayimage__big");
var overlayimage__small = document.querySelector(".overlayimage__small");
var btnClose = document.querySelector(".btnClose");

btnClose.addEventListener("click", function () {
  overlayimage__big.style.display = "none";
});

overlayimage__small.addEventListener("click", function () {
  overlayimage__big.style.display = "block";
});

setTimeout(function () {
  overlayimage__big.style.display = "none";
}, 10000);
