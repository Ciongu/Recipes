"use strict";

const navItem = document.querySelectorAll(".nav-item");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  for (let x of navItem) {
    x.classList.toggle("active");
  }
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    for (let x of navItem) {
      x.classList.remove("active");
      console.log(x);
    }
  })
);
