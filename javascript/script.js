$(document).ready(function() {
  $(".projectsList li").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
    var id = $(this).attr("id");
    if (id === "all") {
      $(".projectItem").show().removeClass("fadeOut");
    } else {
      $(".projectItem:not(." + id + "*)").hide().removeClass("fadeOut");
      $("." + id).show().addClass("fadeOut");
    }
  });
  $(window).scroll(function() {
    scrollFunction();
    //Add animation to list items
    var top_of_element = $("#list").offset().top;
    var bottom_of_element = $("#list").offset().top + $("#list").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if (
      bottom_of_screen > top_of_element &&
      top_of_screen < bottom_of_element
    ) {
      $(".list").addClass("animated").css("opacity", 1);
    }

    //Add animation to project images
    var top_of_element1 = $("#portfolioCont").offset().top;
    var bottom_of_element1 =
      $("#portfolioCont").offset().top + $("#portfolioCont").outerHeight();
    var bottom_of_screen1 = $(window).scrollTop() + $(window).height();
    var top_of_screen1 = $(window).scrollTop();

    if (
      bottom_of_screen1 > top_of_element1 &&
      top_of_screen1 < bottom_of_element1
    ) {
      $(".projects  img").addClass("animatedImg").css("opacity", 1);
    }
  });
  //animate navbar's anchors
  $(".nav-item a, .divider a").click(function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      "slow"
    );
    return false;
  });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

// animate scrolling
function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}
