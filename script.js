// koden er udarbejdet af Anders Iversen, og er i fællesskab med ham gennemgået og forklaret
"use strict";
window.addEventListener("load", setup);

// Array containing all numbers
const model = [13, 25, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1, 9, 8, 30, 12, 0, 30, 7, 3, 6, 3, 6, 3, 19, 24, 29, 14, 4, 1, 18, 1];

// Array containing all divs
const barArray = document.querySelectorAll(".bar");

let counter = 0;

function setup() {
  console.log("setup");
  setTimeout(loop, 1000);
}

function loop() {
  console.log("loop");
  const queueSize = getNumberOfCustomers();

  if (counter < 40) {
    model.unshift(queueSize);
    counter++;
    updateBars();
  } else {
    counter++;
    model.length = 40;
    model.unshift(queueSize);
    updateBars();
  }
  console.log(model);
  setup();
}

function updateBars() {
  console.log("updateBars");

  for (let i = 0; i < 40; i++) {
    barArray.textContent = model[i];
    barArray[i].style.height = `${model[i]}%`;
  }
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}
