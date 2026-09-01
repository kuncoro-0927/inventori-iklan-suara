window.addEventListener("load", function () {
  var imageSrcWp = "assets/images/260x200.jpg";
  var imageSrc = "assets/images/750x500.jpg";
  var linkSrc = "#";

  function getOrCreateAd(container, defaultImgSrc) {
    var scrollHeadline = container.querySelector(".scrollHeadline");
    var trigger = container.querySelector(".trigger");

    if (!scrollHeadline) {
      scrollHeadline = document.createElement("div");
      scrollHeadline.className = "scrollHeadline";

      var img = document.createElement("img");
      img.src = defaultImgSrc;

      var link = document.createElement("a");
      link.href = linkSrc;
      link.target = "_blank";

      var closeBanner = document.createElement("span");
      closeBanner.className = "closebanner";
      closeBanner.textContent = "X";

      scrollHeadline.appendChild(img);
      scrollHeadline.appendChild(link);
      scrollHeadline.appendChild(closeBanner);
      container.appendChild(scrollHeadline);
    }

    if (!trigger) {
      trigger = document.createElement("span");
      trigger.className = "trigger";
      trigger.textContent = "CLICK TO EXPAND";
      container.appendChild(trigger);
    }

    return { scrollHeadline: scrollHeadline, trigger: trigger };
  }

  function wireAd(headlineEl, scrollHeadline, trigger) {
    var closeBanner = scrollHeadline.querySelector(".closebanner");
    var adImg = scrollHeadline.querySelector("img");

    function setTriggerWidth() {
      trigger.style.width =
        adImg && adImg.naturalHeight === 390 ? "52%" : "56%";
    }
    if (adImg) {
      if (adImg.complete) {
        setTriggerWidth();
      } else {
        adImg.addEventListener("load", setTriggerWidth);
      }
    }

    function closeAd() {
      headlineEl.classList.add("offAds");
      scrollHeadline.classList.add("offAds");
      trigger.classList.add("offAds");
    }

    function openAd() {
      headlineEl.classList.remove("offAds");
      scrollHeadline.classList.remove("offAds");
      trigger.classList.remove("offAds");
    }

    headlineEl.classList.add("onAds");

    if (closeBanner) {
      closeBanner.addEventListener("click", closeAd);
    }
    trigger.addEventListener("click", openAd);

    setTimeout(function () {
      trigger.style.display = "block";
    }, 2000);
    setTimeout(closeAd, 10000);
  }

  function forWpKanal() {
    var headline = document.querySelector("#scrollheadline");
    if (!headline) return;
    var ad = getOrCreateAd(headline, imageSrcWp);
    ad.scrollHeadline.classList.add("scrollHeadline_wp");
    wireAd(headline, ad.scrollHeadline, ad.trigger);
  }

  function forTeknoKanal() {
    var headlineBig = document.querySelector(".headline__big");
    var headlineTekno = document.querySelector(".headline-tekno");
    if (!headlineTekno || !headlineBig) return;
    var ad = getOrCreateAd(headlineTekno, imageSrcWp);
    ad.scrollHeadline.classList.add("scrollHeadline_wp");
    wireAd(headlineBig, ad.scrollHeadline, ad.trigger);
  }

  function forArticle() {
    var headline = document.querySelector("#scrollheadline");
    if (!headline) return;
    var ad = getOrCreateAd(headline, imageSrc);
    wireAd(headline, ad.scrollHeadline, ad.trigger);
  }

  function setDomain() {
    var sitename = document.location.href;

    switch (sitename) {
      case "https://example.com/":
        forWpKanal();
        break;
      default:
        forArticle();
        break;
    }
  }

  setDomain();
});
