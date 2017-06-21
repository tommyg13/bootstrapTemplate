$(document).ready(function(){
	var array = [
  "https://www.w3schools.com/css/trolltunga.jpg",
  "http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg",
  "http://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg",
  "https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg"
];
var counter = 0;
var nextColor;

$(".fa-arrow-left").tooltip({
  content: "<img class='tooltip' src=" + array[array.length - 1] + " />"
});
$(".fa-arrow-right").tooltip({
  content: "<img class='tooltip' src=" + array[1] + " />"
});
$("." + counter).addClass("fa fa-circle");

function bgchange() {
  counter = (counter + 1) % array.length;
  nextColor = array[counter];
  $(".slide").css("background", "url(" + nextColor + ")");
  $(".slide").css("background-repeat", "no-repeat");
  $(".slide").css("background-size", "cover");
  $(".slide").css("background-position", "center");
  toggleClass(counter);
}
setInterval(bgchange, 5000);

$(".fa-arrow-right").on("click", function() {
  $(".slide").css("background", "url(" + nextColor + ")");
  $(".slide").css("background-repeat", "no-repeat");
  $(".slide").css("background-size", "cover");
  $(".slide").css("background-position", "center");
  bgchange();
  toggleClass(counter);
});

$(".fa-arrow-left").on("click", function() {
  var index = array.indexOf(nextColor) - 1;
  if (index < 0) index = array.length - 1;
  nextColor = array[index];

  $(".slide").css("background", ("background", "url(" + array[index] + ")"));
  $(".slide").css("background-repeat", "no-repeat");
  $(".slide").css("background-size", "cover");
  $(".slide").css("background-position", "center");
  counter = index;
  toggleClass(counter);
});

$(".fa-circle-o").on("click", function() {
  var number = $(this).data("num");
  $(".slide").css("background", ("background", "url(" + array[number] + ")"));
  $(".slide").css("background-repeat", "no-repeat");
  $(".slide").css("background-size", "cover");
  $(".slide").css("background-position", "center");
  counter = number;
  toggleClass(counter);
});

function toggleClass(count) {
  $("li i:not(." + count + ")")
    .removeClass("fa fa-circle")
    .addClass("fa fa-circe-o");
  $("." + count).addClass("fa fa-circle");
  var prevImage = 0;
  if (count - 1 < 0) prevImage = array.length - 1;
  else prevImage = count - 1;
  $(".fa-arrow-left").on("mouseover", function() {
    $(".fa-arrow-left").tooltip({
      content: "<img class='tooltip' src=" + array[prevImage] + " />"
    });
  });
  var nextImage = 0;
  if (count + 1 > array.length - 1) nextImage = 0;
  else nextImage = count + 1;
  $(".fa-arrow-right").on("mouseover", function() {
    $(".fa-arrow-right").tooltip({
      content: "<img class='tooltip' src=" + array[nextImage] + " />"
    });
  });
}

})