
var images = [];
images[0] = "images/images1.jpeg";
images[1] = "images/images2.jpeg";
images[2] = "images/images3.jpeg";
images[3] = "images/images4.jpeg";
images[4] = "images/images5.jpeg";
images[5] = "images/images6.jpeg";

var imagecredit = [];
imagecredit[0] = "source: https://www.pexels.com/photo/photo-of-lighted-buildings-near-river-2570704/"
imagecredit[1] = "source: https://www.pexels.com/photo/glowing-city-embankment-with-amusement-park-in-nighttime-3474830/"
imagecredit[2] = "source: https://www.pexels.com/photo/light-city-sunset-water-7115166/"
imagecredit[3] = "source: https://www.pexels.com/photo/food-wood-landscape-beach-7115278/"
imagecredit[4] = "source: https://www.pexels.com/photo/city-water-skyline-building-9675741/"
imagecredit[5] = "source: https://www.pexels.com/photo/fruit-salads-in-plate-1640774/";
var photocredit = $("#credit");
var i = 0;

function slideshow(slidenum) {
  if (slidenum === 'next') {
    i++;
    if (i > images.length - 1) {
      i = 0;
    }
  }
  if (slidenum === 'previous') {
    i--;
    if (i < 0) {
      i = images.length - 1;
    }
  }
  for (var n = 0; n < images.length; n++) {
    photocredit.innerHTML = imagecredit[i];
  }
  //document.getElementById('slide').src = images[i];
  $('#slide').attr("src", images[i]);
}


$(document).ready(function () {
  //adds btn animation via css
  $('button').mouseenter(function () {
    $(this).addClass("btnHover");
  });
  $('button').mouseleave(function () {
    $(this).removeClass("btnHover");
  });
  
  //next/previous with credit animation
  $('#next').click(function () {
    $('#next').click(slideshow('next'));
    $('#credit').fadeOut();
    $('#credit').fadeIn(800);
    $("#slide").effect("slide").delay(500);
  })

  $('#prev').click(function () {
    slideshow('previous');
    $('#credit').fadeOut();
    $('#credit').fadeIn(800);
    $("#slide").effect("slide").delay(500);

  })
});