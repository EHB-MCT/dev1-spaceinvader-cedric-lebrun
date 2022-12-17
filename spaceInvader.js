"use strict";

// added type for autocompletion ease :p
let canvas = /** @type {HTMLCanvasElement} */ document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawBackground();
drawInvader([
  [0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
]);

// -> function that maps 1 | 0 to image
// 2 dim array
// [[0,1,0,1,0],
//  [...],
//  [...]]
function drawInvader(matrix) {
  let posX = 100;
  let posY = 100;

  matrix.forEach((array) => {
    posX = 100;
    array.forEach((element) => {
      if (element == 1) {
        drawGreenSquare(posX, posY);
      }
      posX += 50;
    });
    posY += 50;
  });
}

// -> function that draws background
function drawBackground() {
  context.fillStyle = "black";
  context.fillRect(50, 50, 350, 350);
}

// -> function that draws single square in given position
function drawGreenSquare(posX, posY) {
  context.fillStyle = "#AAFF00"; // bright green according to https://htmlcolorcodes.com/colors/bright-green
  context.fillRect(posX, posY, 50, 50);
}
