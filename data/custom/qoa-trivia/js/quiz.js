var shareImage,
  shareDescription,
  playFlag = false;

function showFinalResult() {
  var totalQuestion = 5;
  var visibleResult = $(".radio-choice:checked").length;

  if (parseInt(totalQuestion) !== parseInt(visibleResult)) {
    return false;
  }

  var finalResultObj = [
    {
      id: 10532,
      image: "assets/images/bali.jpg",
      description:
        "<h3>Bali<\/h3><p>Bali yang dikenal sebagai pulau wisata di Indonesia, cocok buat dijadikan tempat tinggal. Gak cuma wisatanya yang menarik, kamu juga bisa bertemu banyak orang baru!<\/p>",
    },
    {
      id: 10533,
      image: "assets/images/bali.jpg",
      description:
        "<h3>Bali<\/h3><p>Bali yang dikenal sebagai pulau wisata di Indonesia, cocok buat dijadikan tempat tinggal. Gak cuma wisatanya yang menarik, kamu juga bisa bertemu banyak orang baru!<\/p>",
    },
    {
      id: 10534,
      image: "assets/images/bali.jpg",
      description:
        "<h3>Bali<\/h3><p>Bali yang dikenal sebagai pulau wisata di Indonesia, cocok buat dijadikan tempat tinggal. Gak cuma wisatanya yang menarik, kamu juga bisa bertemu banyak orang baru!<\/p>",
    },
    {
      id: 10535,
      image: "assets/images/bali.jpg",
      description:
        "<h3>Bali<\/h3><p>Bali yang dikenal sebagai pulau wisata di Indonesia, cocok buat dijadikan tempat tinggal. Gak cuma wisatanya yang menarik, kamu juga bisa bertemu banyak orang baru!<\/p>",
    },
    {
      id: 10536,
      image: "assets/images/bali.jpg",
      description:
        "<h3>Bali<\/h3><p>Bali yang dikenal sebagai pulau wisata di Indonesia, cocok buat dijadikan tempat tinggal. Gak cuma wisatanya yang menarik, kamu juga bisa bertemu banyak orang baru!<\/p>",
    },
  ];

  var obj = [];

  var i;
  for (i = 0; i < parseInt(totalQuestion); i++) {
    obj[i] = 0;
  }

  $.each($(".radio-choice:checked"), function (key, value) {
    var choiceVal = $(this).val();

    if (choiceVal in obj) {
      obj[choiceVal]++;
    } else {
      obj[choiceVal] = 1;
    }
  });

  var max = Math.max.apply(null, obj);
  var idxResult = 0;

  $.each(obj, function (key, value) {
    if (value == max) {
      idxResult = key;
    }
  });

  $.each(finalResultObj, function (key, value) {
    if (idxResult == key) {
      shareImage = value.image;
      shareDescription = value.description;

      $("#quiz-result-modal .content-quiz-image img").attr("src", value.image);
      $("#quiz-result-modal .content-quiz-description").html(
        "<p>" + value.description + "</p>",
      );
      $("#quiz-result-modal").modal({
        backdrop: "static",
        keyboard: false,
        show: true,
      });
      $(".close-quiz-result-modal").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.reload();
      });

      shareImage = value.image;
      shareDescription = value.description.replace(/(<([^>]+)>)/gi, "");

      dataLayer.push({
        event: "quiz",
        quizAction: "Finish Quiz",
        quizLabel: "Yakin Kamu Bisa Survive Melewati Situasi Horor Ini?",
      });

      $.ajax({
        type: "POST",
        url: "index.html",
        data: {
          _token: "xaohPqcPQodPZYAJIi85V5ix48WHCjVqnZuf9zR8",
          _method: "PUT",
          slug: "yakin-kamu-bisa-survive-melewati-situasi-horor-ini-quiz",
          id: value.id,
        },
        cache: false,
        success: function (data) {},
      });

      return false;
    }
  });
}

$(".quiz-choice ul li").on("click", function (e) {
  e.preventDefault();
  $(this).closest(".quiz-choice").find("li").removeClass("checked");
  $(this).addClass("checked");
  $(this).children("input").prop("checked", true);

  if (playFlag == false) {
    playFlag = true;

    dataLayer.push({
      event: "quiz",
      quizAction: "Play Quiz",
      quizLabel: "TIPE COWOK SEPERTI APA YANG COCOK UNTUKMU?",
    });

    $.ajax({
      type: "POST",
      url: "index.html",
      data: {
        _token: "xaohPqcPQodPZYAJIi85V5ix48WHCjVqnZuf9zR8",
        _method: "PUT",
        slug: "TIPE COWOK SEPERTI APA YANG COCOK UNTUKMU?",
      },
      cache: false,
      success: function (data) {},
    });
  }

  showFinalResult();
});

// clever tab 1

clevertap.event.push("Entrance Tes 1", {
  Title: "Yakin Kamu Bisa Survive Melewati Situasi Horor Ini?",
  Category: "Hype",
  "Sub-Category": "Fun Fact",
});

// modal quiz
$("#search-modal").on("show.bs.modal", function (e) {
  $("#search-input").val("");
  $("#search-list").html("");
  $(".content-search .latest-post")
    .removeClass("no-bg")
    .removeClass("no-result");
  $(".search-text").show();
  $(".search-text").html("Kamu bisa mencari artikel disini");
});
