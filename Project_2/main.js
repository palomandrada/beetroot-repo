// Navigation ---------------------------
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".navigation_list").classList.toggle("open");
  document.querySelector(".hamburger").classList.toggle("is-active");
});
