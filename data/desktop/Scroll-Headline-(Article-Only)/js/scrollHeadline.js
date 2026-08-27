window.addEventListener("load", function () {
  var photoAdsUrl = "assets/images/700x393.jpg";
  var urlLanding = "https://example.com/";
  var headline = document.querySelector(".headline");
  var photo__oriWP = document.querySelector(".headline__big");
  var photo__wrap = document.querySelector(".imgfull_div");
  var photo__ori = document.querySelector(".imgfull_div img");
  var photoAds = document.createElement("img");
  var closebanner = document.createElement("span");

  //money desktop
  var headline__big = document.querySelector(".headline__big");
  var divmoney = document.createElement("div");
  divmoney.setAttribute("class", "divmoney");

  //--
  var trigger = document.createElement("span");
  var textTrigger = document.createTextNode("CLICK TO EXPAND");
  trigger.setAttribute("class", "trigger");
  trigger.setAttribute("id", "trigger");
  trigger.appendChild(textTrigger);

  // condition
  function setDomain() {
    var sitename = document.location.href;
    switch (sitename) {
      case "https://example.com/":
        console.log("kanal");
        forWpKanal();
        break;
      default:
        console.log("selain wp");
        forArticle();
        break;
    }
  }

  setDomain();

  function postElement() {
    closebanner.setAttribute("class", "closebanner");
    closebanner.setAttribute("id", "closebanner");
    closebanner.innerHTML = "X";
    photoAds.setAttribute("class", "photoAds");
    photoAds.classList.add("photoOri");
    photoAds.classList.add("not_change");
    closebanner.classList.add("not_textblock");
    photoAds.src = photoAdsUrl;
  }

  function forWpKanal() {
    //append element
    postElement();
    photo__oriWP.classList.add("photoOri");
    headline.appendChild(photoAds);
    headline.insertBefore(photoAds, null);
    headline.appendChild(closebanner);
    headline.appendChild(trigger);

    function closeAd() {
      closebanner.style.display = "none";
      photo__oriWP.classList.add("CloseAds");
      photoAds.classList.add("CloseAds");
      trigger.classList.add("CloseAds");
      trigger.classList.add("not_textblock");
    }
    //close
    closebanner.addEventListener("click", function () {
      closeAd();
    });

    //timeout
    setTimeout(function () {
      trigger.style.display = "block";
    }, 2000);
    setTimeout(function () {
      closeAd();
    }, 7000);

    trigger.addEventListener("click", function () {
      closebanner.style.display = "flex";
      photo__oriWP.classList.remove("CloseAds");
      photoAds.classList.remove("CloseAds");
      trigger.classList.remove("CloseAds");
    });
  }

  function forMoneyKanal() {
    //append element
    postElement();
    headline.appendChild(divmoney);
    headline.classList.add("photoMoney");
    photo__oriWP.classList.add("photoOri");
    divmoney.appendChild(photoAds);
    divmoney.insertBefore(photoAds, null);
    divmoney.appendChild(closebanner);
    divmoney.appendChild(trigger);

    function closeAd() {
      closebanner.style.display = "none";
      photo__oriWP.classList.add("CloseAds");
      photoAds.classList.add("CloseAds");
      trigger.classList.add("CloseAds");
      trigger.classList.add("not_textblock");
    }
    //close
    closebanner.addEventListener("click", function () {
      closeAd();
    });

    //timeout
    setTimeout(function () {
      trigger.style.display = "block";
    }, 2000);
    setTimeout(function () {
      closeAd();
    }, 7000);

    trigger.addEventListener("click", function () {
      closebanner.style.display = "flex";
      photo__oriWP.classList.remove("CloseAds");
      photoAds.classList.remove("CloseAds");
      trigger.classList.remove("CloseAds");
    });
  }

  function forArticle() {
    //append element
    postElement();
    photo__ori.classList.add("photoOri");
    photo__wrap.appendChild(photoAds);
    photo__wrap.insertBefore(photoAds, null);
    photo__wrap.appendChild(closebanner);
    photo__wrap.appendChild(trigger);

    function closeAd() {
      closebanner.style.display = "none";
      photo__ori.classList.add("CloseAds");
      photoAds.classList.add("CloseAds");
      trigger.classList.add("CloseAds");
      trigger.classList.add("not_textblock");
    }

    //close
    closebanner.addEventListener("click", function () {
      closeAd();
    });
    //timeout
    setTimeout(function () {
      trigger.style.display = "block";
    }, 2000);
    setTimeout(function () {
      closeAd();
    }, 7000);

    trigger.addEventListener("click", function () {
      closebanner.style.display = "flex";
      photo__ori.classList.remove("CloseAds");
      photoAds.classList.remove("CloseAds");
      trigger.classList.remove("CloseAds");
      trigger.classList.add("not_textblock");
    });
  }

  photoAds.addEventListener("click", function () {
    window.open(urlLanding);
  });
});
