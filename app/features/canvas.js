"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canvasToPPM = exports.writingPixelToCanvas = exports.createCanvas = void 0;
const types_1 = require("../types/types");
const createCanvas = (width, height, color, id) => {
    const canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.width = width;
    canvas.height = height;
    canvas.setAttribute("style", `color:rgb(${color.x},${color.y},${color.z}); border: 10px solid black;`);
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
};
exports.createCanvas = createCanvas;
const writingPixelToCanvas = (canvas, x, y, color) => {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = `rgb(${color.x},${color.y},${color.z})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
    return;
};
exports.writingPixelToCanvas = writingPixelToCanvas;
const canvasToPPM = (canvas) => {
    const PPMString = `P3\n${canvas.width} ${canvas.height} \n255`;
    console.log(PPMString);
    return PPMString;
};
exports.canvasToPPM = canvasToPPM;
const color = new types_1.Color(255, 26, 0, 0);
console.log(`x: ${color.x}, ${color.y}, ${color.z}`);
(0, exports.createCanvas)(800, 700, color, "canvas");
const myCanvas = document.getElementById('canvas');
(0, exports.writingPixelToCanvas)(myCanvas, 200, 5, new types_1.Color(4, 244, 0));
(0, exports.canvasToPPM)(myCanvas);
