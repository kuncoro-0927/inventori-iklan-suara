window.addEventListener("load", function () {
  var olContainer = document.querySelector(".ol_container");
  var olBig = document.querySelector(".ol_big");
  var closeBtn = document.querySelector(".ol_close_ad");

  // bungkus semua div selain .ol_container ke dalam .wrap__container
  var wrap = document.createElement("div");
  wrap.className = "wrap__container";

  var siblings = Array.prototype.slice
    .call(document.body.children)
    .filter(function (el) {
      return !el.classList.contains("ol_container");
    });

  document.body.insertBefore(wrap, siblings[0]);
  siblings.forEach(function (el) {
    wrap.appendChild(el);
  });

  var olBigHtmlHeight = 480;

  // buat bar "swipe up"
  var ldSwipe = document.createElement("div");
  ldSwipe.className = "ol_swipe";
  ldSwipe.textContent = "Swipe up untuk membaca artikel";
  wrap.insertBefore(ldSwipe, wrap.firstChild);

  olContainer.style.display = "block";
  olContainer.style.height = olBigHtmlHeight + "px";
  wrap.style.top = olBigHtmlHeight + "px";

  // klik close: animasikan balik ke 0
  closeBtn.addEventListener("click", function () {
    closeBtn.style.display = "none";

    wrap.style.transition = "top 0.2s ease";
    wrap.style.top = "0px";

    olBig.style.transition = "top 0.2s ease";
    olBig.style.top = "0px";

    olContainer.style.transition = "height 0.2s ease";
    olContainer.style.height = "0px";

    setTimeout(function () {
      olBig.style.display = "none";
    }, 200);

    ldSwipe.style.display = "none";
  });

  // header jadi fixed kalau udah scroll lewat tinggi container
  window.addEventListener("scroll", function () {
    var theader = document.querySelector(".theader");
    if (!theader) return;
    var getHeight = olContainer.offsetHeight;
    theader.style.position = window.scrollY > getHeight ? "fixed" : "relative";
  });

  window.scrollTo(0, 0);
});
