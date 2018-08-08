$(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });

  $("#homelink").on("click", function() {
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
    // or select the mode from jQuery easings
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top
      },
      750,
      "easeInOutExpo"
    );
  });

  $("#serviceslink").on("click", function() {
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
