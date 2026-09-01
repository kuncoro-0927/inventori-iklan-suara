// tab dan loader
$(document).ready(function () {
  $(".tab__nav a").click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var tab = $(this).attr("href");
    $(".tab__main > .tab__main-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
  setTimeout(function () {
    $(".loader").fadeOut();
  }, 1000);
  $(".btn-hitung").click(function () {
    $(this).closest("form").fadeOut(0);
    $(this)
      .closest(".tab__main-content")
      .find(".form-final")
      .fadeIn(0, function () {
        $(".loader").show();
        setTimeout(function () {
          $(".loader").fadeOut();
        }, 1000);
      });
  });
  $(".btn-ulang").click(function () {
    $(this).closest("form").fadeOut(0);
    $(this)
      .closest(".tab__main-content")
      .find(".form-hitung")
      .fadeIn(0, function () {
        $(".loader").show();
        setTimeout(function () {
          $(".loader").fadeOut();
        }, 1000);
      });
  });
});

// hitung zakat Penghasilan
$("#hitungZakatPenghasilan").click(function () {
  var pendapatan = $("input[name=pendapatan]").val();
  var pendapatan_lain = $("input[name=pendapatan_lain]").val();
  var hutang = $("input[name=hutang]").val();
  if (pendapatan == "") {
    pendapatan = 0;
  } else {
    pendapatan = pendapatan.replace(/\./g, "");
  }
  if (pendapatan_lain == "") {
    pendapatan_lain = 0;
  } else {
    pendapatan_lain = pendapatan_lain.replace(/\./g, "");
  }
  if (hutang == "") {
    hutang = 0;
  } else {
    hutang = hutang.replace(/\./g, "");
  }
  var pendapatan_all =
    parseInt(pendapatan) + parseInt(pendapatan_lain) - parseInt(hutang);

  var harga_beras = "10.000";
  var nishab = parseInt(harga_beras) * 520;
  var bayar = 0;
  if (parseInt(pendapatan_all) < parseInt(nishab)) {
    $("#status_zakat_penghasilan").empty();
    $("#bayar_zakat_penghasilan").empty();
    $("#status_zakat_penghasilan").append("TIDAK");
    $("#bayar_zakat_penghasilan").append("Rp. " + bayar);
  } else {
    var bayar = Math.floor(0.025 * parseInt(pendapatan_all));
    $("#status_zakat_penghasilan").empty();
    $("#bayar_zakat_penghasilan").empty();
    $("#status_zakat_penghasilan").append("YA");
    $("#bayar_zakat_penghasilan").append(
      "Rp. " + bayar.toLocaleString("it-IT"),
    );
  }
});

// hitung ulang zakat penghasilan
$(".btn-ulang-penghasilan").click(function () {
  $("input[name=pendapatan]").val("");
  $("input[name=pendapatan_lain]").val("");
  $("input[name=hutang]").val("");
});

// hitung zakat mal
$("#hitungZakatSimpanan").click(function () {
  var tabungan = $("input[name=harta_tabungan]").val();
  var lain = $("input[name=harta_lain]").val();
  var hutang = $("input[name=hutang_jatuh_tempo]").val();
  if (tabungan == "") {
    tabungan = 0;
  } else {
    tabungan = tabungan.replace(/\./g, "");
  }
  if (lain == "") {
    lain = 0;
  } else {
    lain = lain.replace(/\./g, "");
  }
  if (hutang == "") {
    hutang = 0;
  } else {
    hutang = hutang.replace(/\./g, "");
  }
  var harta = parseInt(tabungan) + parseInt(lain) - parseInt(hutang);
  var harga_emas = "567.000";
  var nisab = parseInt(harga_emas) * 85;
  var bayar = 0;
  if (harta < nisab) {
    $("#status").empty();
    $("#bayar_zakat").empty();
    $("#status").append("TIDAK");
    $("#bayar_zakat").append("Rp. " + bayar);
  } else {
    var bayar = Math.floor(0.025 * parseInt(harta));
    $("#status").empty();
    $("#bayar_zakat").empty();
    $("#status").append("YA");
    $("#bayar_zakat").append("Rp. " + bayar.toLocaleString("it-IT"));
  }
});

// hitung ulang zakat mal
$(".btn-ulang-simpanan").click(function () {
  $("input[name=harta_tabungan]").val("");
  $("input[name=harta_lain]").val("");
  $("input[name=hutang_jatuh_tempo]").val("");
});

// validasi angka
var myInput = document.querySelectorAll("input[type=text]");

function keyAllowed(key, length) {
  var keys = [
    8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    57, 91, 92, 93,
  ];
  if (length == 0) {
    var keys = [
      8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      91, 92, 93,
    ];
  }
  if (key && keys.indexOf(key) === -1) return false;
  else return true;
}

myInput.forEach(function (element) {
  element.addEventListener(
    "keypress",
    function (e) {
      var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
      var length = this.value.length;

      if (!keyAllowed(key, length)) e.preventDefault();
    },
    false,
  );
  element.addEventListener(
    "paste",
    function (e) {
      var pasteData = e.clipboardData.getData("text/plain");
      if (pasteData.match(/[^0-9]/)) e.preventDefault();
    },
    false,
  );
});

var $form = $(".form-hitung");
var $input = $form.find("input");
$input.on("keyup", function (event) {
  var selection = window.getSelection().toString();
  if (selection !== "") {
    return;
  }
  var $this = $(this);
  var input = $this.val();

  var input = input.replace(/[\D\s\._\-]+/g, "");
  input = input ? parseInt(input, 10) : 0;
  $this.val(function () {
    return input === 0 ? "" : input.toLocaleString("it-IT");
  });
});
