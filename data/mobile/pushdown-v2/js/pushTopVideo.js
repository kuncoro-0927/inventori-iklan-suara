window.addEventListener("load", function () {
  var pushTopVideo = document.querySelector(".pushTopVideo");
  var header = document.querySelector(".header");
  var btnClose = document.querySelector(".pushTopClose");

  function pushHeaderDown() {
    var adHeight = pushTopVideo.clientHeight;
    header.style.top = adHeight + "px";
  }

  // ad sudah display:block dari awal -> langsung dorong header turun
  if (pushTopVideo && header && pushTopVideo.style.display !== "none") {
    pushHeaderDown();
  }

  btnClose.addEventListener("click", function () {
    pushTopVideo.style.display = "none";
    header.style.top = "0px";
  });

  // jaga-jaga kalau tinggi ad berubah (misal resize layar)
  window.addEventListener("resize", function () {
    if (pushTopVideo.style.display !== "none") {
      pushHeaderDown();
    }
  });
});
