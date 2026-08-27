window.addEventListener("load", function () {
  var pickwordImgSrc = "assets/images/640x100.svg";
  var pickwordUrl = "https://topup.suara.com/";
  var pickwordsColor = "#be2a29";
  var pickwordsColorWhite = "#fff";
  var pickwords = document.querySelectorAll(".pickwords");

  function pickwordsHover() {
    var x, i;
    x = pickwords;
    for (i = 0; i < x.length; i++) {
      var pickwordSpan = document.createElement("span");
      var ImgSrc = pickwordImgSrc;
      var pickwordsImg = document.createElement("IMG");
      pickwordsImg.setAttribute("src", ImgSrc);
      pickwordSpan.appendChild(pickwordsImg);
      pickwordSpan.addEventListener("click", function (event) {
        window.open(pickwordUrl);
      });
      x[i].style.cssText =
        " color:" +
        pickwordsColorWhite +
        " !important; padding:0 3px; background-color: " +
        pickwordsColor +
        "";
      x[i].appendChild(pickwordSpan);
    }
  }
  pickwordsHover();
});
