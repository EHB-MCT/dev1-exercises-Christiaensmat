"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    let offset = 75;
    let spacing = 50;
    while (i < 6) {
        let x = ;
        let y = x;
        Utils.drawLine(75, offset + ( spacing * 1), 325, offset + (spacing * 1));
        Utils.drawLine(75 + (spacing * 1), 75, 75 + (spacing + i), 325);
        i++;
    }
}