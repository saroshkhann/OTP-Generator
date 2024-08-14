"use strict";

const btnOTP = document.querySelector(".otp__btn");
const inputOTP = document.querySelector(".otp__input-box");
const randomNumber = Math.trunc(Math.random() * 1000000);
const btnCopy = document.querySelector(".otp__copy");
const labelOTP = document.querySelector(".otp__copied");

let clicked = false;

btnOTP.addEventListener("click", function () {
  clicked = true;
  labelOTP.textContent = "";
  const randomNumber = Math.trunc(Math.random() * 1000000);
  btnOTP.textContent = "Click again to regenerate!";

  inputOTP.value = randomNumber;
});

btnCopy.addEventListener("click", function () {
  navigator.clipboard.writeText(inputOTP.value);

  clicked ? (labelOTP.textContent = "Copied!") : "";

  setTimeout(function () {
    labelOTP.textContent = "";
  }, 1000);
});
