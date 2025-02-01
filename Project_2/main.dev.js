"use strict";

// Navigation ------------------------------------
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".navigation_list").classList.toggle("open");
  document.querySelector(".hamburger").classList.toggle("is-active");
}); //Text slide -------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var slideIndex = 0;
  var slides = document.querySelectorAll(".hero_container");
  var dots = document.querySelectorAll(".dot");

  function showSlides(n) {
    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = n;
    }

    slides.forEach(function (slide, index) {
      slide.style.display = "none";
      slide.style.opacity = "0";
      slide.style.transform = "translateY(10px)";
      slide.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    slides[slideIndex].style.display = "block";
    setTimeout(function () {
      slides[slideIndex].style.opacity = "1";
      slides[slideIndex].style.transform = "translateY(0)";
    }, 50);
    dots.forEach(function (dot, index) {
      dot.classList.remove("active");
      dot.style.backgroundColor = "transparent";
      dot.style.border = "1px solid white";

      if (index === slideIndex) {
        dot.classList.add("active");
        dot.style.backgroundColor = "white";
      }
    });
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 3000);
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      return currentSlide(index);
    });
  });
  showSlides(slideIndex);
  autoSlide();
}); //Banner carrousel (slick slidr) ------------------

$('.carrousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  nextArrow: '<button type="button" class="slick-next"> <img scr="img/arrow_next"/></button>',
  prevArrow: '<button type="button" class="slick-prev"> <img scr="img/arrow_prev"/></button>',
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 840,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false
    }
  }, {
    breakpoint: 490,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false
    }
  }]
}); // Map -------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([50.82517149319415, 4.365909362285996], 14); //coordinates + zoom level

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {}).addTo(map);
  var circleIcon = L.icon({
    iconUrl: "img/circleIcon.png",
    iconSize: [100, 100],
    // size of the icon
    iconAnchor: [50, 50],
    // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor

  });
  L.marker([50.82517149319415, 4.365909362285996], {
    icon: circleIcon
  }).addTo(map).bindPopup('Come to visit us').openPopup();
});