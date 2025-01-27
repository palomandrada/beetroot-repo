"use strict";

// Navigation ---------------------------
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".navigation_list").classList.toggle("open");
  document.querySelector(".hamburger").classList.toggle("is-active");
});