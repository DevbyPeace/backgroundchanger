"use strict";


const btnYellow = document.querySelector(".yellow");
const btnWhite = document.querySelector(".white");
const btnBlack = document.querySelector(".black");
const btnBlue = document.querySelector(".blue");
const btnGreen = document.querySelector(".green");


//  WHEN YELLOW IS SELECTED
btnYellow.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "yellow";
  document.querySelector("h3").style.color = "black";
  document.querySelector("h4").style.color = "black";
  document.querySelector("h4").textContent = "THE BACKGROUND IS YELLOW!";
});

//  WHEN RESET IS SELECTED
btnWhite.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("h3").style.color = "black";
  document.querySelector("h4").style.color = "black";
  document.querySelector("h4").textContent = "THE BACKGROUND IS WHITE!";
});

// WHEN BLACK IS SELECTED
btnBlack.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("h3").style.color = "white";
  document.querySelector("h4").style.color = "white";
  document.querySelector("h4").textContent = "THE BACKGROUND IS BLACK!";
});

// WHEN BLUE IS SELECTED
btnBlue.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "blue";
  document.querySelector("h4").textContent = "THE BACKGROUND IS BLUE!";
});

// WHEN GREEN IS SELECTED
btnGreen.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector("h4").textContent = "THE BACKGROUND IS GREEN!";
});


// THANK YOU!