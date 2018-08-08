$(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });

  $("a").on("click", function() {
    $("a").removeClass("active");
  });

  $("#homelink").on("click", function() {
    $("#homelink").addClass("active");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#home").offset().top
        },
        1500,
        "easeInOutExpo"
      );
  });

  $("#aboutlink").on("click", function() {
    $("#aboutlink").addClass("active");
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top
      },
      750,
      "easeInOutExpo"
    );
  });

  $("#serviceslink").on("click", function() {
    $("#serviceslink").addClass("active");
    // or select the mode from jQuery easings
    $("html, body").animate(
      {
        scrollTop: $("#services").offset().top
      },
      200,
      "easeInOutExpo"
    );
  });

  $("#portfoliolink").on("click", function() {
    $("#portfoliolink").addClass("active");
    // or select the mode from jQuery easings
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top
      },
      2000,
      "easeInOutExpo"
    );
  });

  $("#teamlink").on("click", function() {
    $("#teamlink").addClass("active");
    // or select the mode from jQuery easings
    $("html, body").animate(
      {
        scrollTop: $("#team").offset().top
      },
      1500,
      "easeInOutExpo"
    );
  });

  $("#contactlink").on("click", function() {
    $("#contactlink").addClass("active");
    // or select the mode from jQuery easings
    $("html, body").animate(
      {
        scrollTop: $("#team").offset().top
      },
      1000,
      "easeInOutExpo"
    );
  });
});
