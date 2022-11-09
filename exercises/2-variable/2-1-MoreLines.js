"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let.width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

drawLines();

function drawLines(){
context.beginPathth();

context.linewidth = 2;

//start
context.moveTo(margin, 20);
context.lineTo( width - margin,20);
context.lineTo(margin, 100);


context.closePath();

    context.stroke();
}
