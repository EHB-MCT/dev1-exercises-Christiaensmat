"use strict";

drawLine();

function drawLine(){

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.lineWidth = 5;

   
   context.strokeStyle = 'red4';
   context.beginPath();
   context.moveTo(50, 50);
   context.lineTo(50, 150);
   context.lineTo(50, 50);
   context.lineTo(75,120 );
   context.lineTo(100,50);
   context.lineTo(100,150);

   
   context.moveTo(150, 50);
   context.lineTo(125, 150 );

   context.moveTo(130,125);
   context.lineTo(170,125);

   context.moveTo(150, 50);
   context.lineTo(175,150);

   context.moveTo(225, 50);
   context.lineTo(225,150);

   context.moveTo(175, 50);
   context.lineTo(275,50);
   
     
   context.stroke();
   
}
