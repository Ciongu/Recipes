"use strict";

let credentials = {
  PopRazvan: "RazvanPop",
  RazvanAlexandru: "AlexandruRazvan",
  PopescuIon: "IonPopescu",
};

console.log(Object.entries(credentials));

const username = document.querySelector(".username");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");
const succesful = document.querySelector(".succesful");
const link = document.querySelector(".link");
const creds = Object.entries(credentials);

submit.addEventListener("click", function () {
  const usernameInput = username.value;
  const passwordInput = password.value;
  console.log(usernameInput, passwordInput);

  for (const [user, pass] of creds) {
    if (user === usernameInput && pass === passwordInput) {
      succesful.classList.remove("hidden");
      link.setAttribute("href", "index.html");
      window.location.href = link.getAttribute("href");
      break;
    } else {
      username.style.border = "1px solid red";
      password.style.border = "1px solid red";
    }
  }
});
