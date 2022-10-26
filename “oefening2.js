"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let.width = context.canvas.width;
let height = context.canvas.height;

let size = 400;
let randomX = Math.floor(Math.random()*(Width-size));
let randomY = Math.floor(Math.random()*(witdh-size));

let r = math.floor(Math.random() * 255);
let g = math.floor(Math.random() * 255);
let b = math.floor(Math.random() * 255);
console.log(r,g,b);
let color = "rgb("+r+","+g+","+b+")";

drawRect(50,400);

function drawRect(pos, size) {
    context.fillStyle=color;
    context.fillRect(pos,pos,size,size);
}


drawLines();

function drawLines(){
context.beginPathth();
let numberOfSquares = 10;
}
