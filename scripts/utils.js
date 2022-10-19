"use strict";
import context from "./context.js";

/**
 * Draws a line between 2 points
 * @param {number} x1 X coordinate of the starting point
 * @param {*} y1 Y coordinate of the starting point
 * @param {*} x2 X coordinate of the end point
 * @param {*} y2 Y coordinate of the end point
 */

export function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}
