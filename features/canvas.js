"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writingPixelToCanvas = exports.createCanvas = void 0;
const types_1 = require("../types/types");
const createCanvas = (width, height, color) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.setAttribute("style", `color:rgb(${color.w, color.x, color.y}); border: 3px solid black;`);
    const ctx = canvas.getContext("2d");
    if (ctx) {
        console.log("ctx exitst", ctx);
        ctx.beginPath();
        // if you want to fill the canvas
        // ctx.fillStyle = `rgb(${ color.w, color.x, color.y }`
        // ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.closePath();
    }
    document.body.appendChild(canvas);
};
exports.createCanvas = createCanvas;
const writingPixelToCanvas = (canvas, x, y, color) => {
    return;
};
exports.writingPixelToCanvas = writingPixelToCanvas;
const color = new types_1.Color(4, 29, 3, 0);
(0, exports.createCanvas)(300, 200, color);
