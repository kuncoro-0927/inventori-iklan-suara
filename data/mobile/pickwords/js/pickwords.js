window.addEventListener("load", function () {
  var pickwordImgSrc = "images/320x50.jpg";
  var pickwordUrl =
    "https://www.marlboro.id/?utm_source=Kompas%20wp&utm_medium=display%20cpd&utm_campaign=23-03-2020%20Discovered%203%20Tactical%20%20Brand%20Awareness%20Discover&utm_content=RMB%20320x50%20all&utm_term=Marlboro%20Discovered%203&utm_b=Marlboro&utm_pid=Brand%20Awareness-Discover";
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
      //x[i].style.backgroundColor = pickwordsColor;
      //x[i].style.padding = "0 3px";
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
