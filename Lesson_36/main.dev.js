"use strict";

var tabs = document.querySelectorAll('.tab');
var info = document.querySelectorAll('.information');
tabs.forEach(function (tab, index) {
  tab.addEventListener('click', function () {
    tabs.forEach(function (tab) {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
  });
  info.forEach(function (information) {
    information.classList.remove('active');
  });
  info[index].classList.add('active');
});