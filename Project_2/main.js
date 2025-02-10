
// Navigation ------------------------------------
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".navigation_list").classList.toggle("open");
  document.querySelector(".hamburger").classList.toggle("is-active");
});

//Text slide -------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".hero_container");
  const dots = document.querySelectorAll(".dot");

  function showSlides(n) {
      if (n >= slides.length) {
          slideIndex = 0;
      } else if (n < 0) {
          slideIndex = slides.length - 1;
      } else {
          slideIndex = n;
      }

      slides.forEach((slide, index) => {
          slide.style.display = "none";
          slide.style.opacity = "0";
          slide.style.transform = "translateY(10px)";
          slide.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      });

      slides[slideIndex].style.display = "block";
      setTimeout(() => {
          slides[slideIndex].style.opacity = "1";
          slides[slideIndex].style.transform = "translateY(0)";
      }, 50);

      dots.forEach((dot, index) => {
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

  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => currentSlide(index));
  });

  showSlides(slideIndex);
  autoSlide();
});


//Banner carrousel (slick slidr) ------------------

$('.carrousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    nextArrow: '<button type="button" class="slick-next"> <img scr="img/arrow_next.svg"/></button>',
    prevArrow: '<button type="button" class="slick-prev"> <img scr="img/arrow_prev.svg"/></button>',
    responsive: [
        {
          breakpoint: 1024,   
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 840,   
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 490,   
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
  });

// Gallery --------------------------------------

lightGallery(document.getElementById('lightGallery'), {
  plugins: [lgZoom, lgThumbnail, lgFullscreen],
  thumbnail: true,
  speed: 500,
});

// Map -------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([50.82517149319415, 4.365909362285996], 14); //coordinates + zoom level

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  }).addTo(map);

  var circleIcon = L.icon({
    iconUrl: "img/circleIcon.png",

    iconSize:     [100, 100], // size of the icon
    iconAnchor:   [50, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

  L.marker([50.82517149319415, 4.365909362285996],{icon: circleIcon}).addTo(map)
    .bindPopup('Come to visit us')
    .openPopup();
});

// Form ------------------------------------------

document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); 
  
  let emailInput = document.getElementById("email");
  let nameInput = document.getElementById("name");
  let messageBox = document.getElementById("messageBox");
  let email = emailInput.value.trim();
  let name = nameInput.value.trim();

  // email validation pattern 
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
      messageBox.textContent = "Please enter your name.";
      messageBox.className = "message error-message"; // red
      messageBox.style.display = "block"; 
      return; 
  } 
  
  if (!emailPattern.test(email)) {
      emailInput.value = ""; // Clear input
      emailInput.placeholder = "Invalid email"; 
      emailInput.classList.add("error"); // red
      messageBox.textContent = "Invalid email, please enter a valid email."; 
      messageBox.className = "message error-message"; // red
      messageBox.style.display = "block"; 
      return; 
  }

  // If both fields are valid
  emailInput.classList.remove("error"); 
  messageBox.textContent = "Form submitted successfully!"; 
  messageBox.className = "message success-message"; // green
  messageBox.style.display = "block"; 

  setTimeout(() => {
      nameInput.value = "";
      emailInput.value = "";
      emailInput.placeholder = "Email";
      messageBox.style.display = "none"; // Hide message
  }, 3000);
});


document.getElementById("name").addEventListener("input", function() {
  document.getElementById("messageBox").style.display = "none"; 
});

document.getElementById("email").addEventListener("input", function() {
  this.placeholder = "Email";
  this.classList.remove("error");
  document.getElementById("messageBox").style.display = "none"; 
});