$("#myCarousel").carousel({
  interval: false,
});

//scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function (event) {
  var yClick = event.originalEvent.touches[0].pageY;
  $(this).one("touchmove", function (event) {
    var yMove = event.originalEvent.touches[0].pageY;
    if (Math.floor(yClick - yMove) > 1) {
      $(".carousel").carousel("next");
    } else if (Math.floor(yClick - yMove) < -1) {
      $(".carousel").carousel("prev");
    }
  });
  $(".carousel").on("touchend", function () {
    $(this).off("touchmove");
  });
});

var estado = 0;
$("body").on("click", ".bar-navegacion", function () {
  if (estado == 0) {
    $(".nav-navegacion").css("opacity", "1");
    $(".nav-navegacion").css("display", "block");
    estado = 1;
  } else {
    $(".nav-navegacion").css("opacity", "0%");
    $(".nav-navegacion").css("display", "none");
    estado = 0;
  }
});
