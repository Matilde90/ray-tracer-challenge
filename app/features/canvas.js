"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canvasToPPM = exports.writingPixelToCanvas = void 0;
const types_1 = require("../types/types");
// export const createHTMLCanvas = (width: number, height: number, color: Color, id: string) => {
//   const canvas = document.createElement('canvas') as HTMLCanvasElement;
//   canvas.id = id;
//   canvas.width = width;
//   canvas.height = height;
//   canvas.setAttribute("style", `color:rgb(${color.x},${color.y},${color.z}); border: 10px solid black;`);
//   const ctx = canvas.getContext("2d");
//   document.body.appendChild(canvas)
// }
// export const writingPixelToHTMLCanvas = (canvas: HTMLCanvasElement, color: Color) => {
//   const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
//   ctx.beginPath();
//   ctx.fillStyle = `rgb(${color.x},${color.y},${color.z})`;
//   ctx.fillRect(0, 0, canvas.width, canvas.height)
//   ctx.closePath();
//   return
// }
const writingPixelToCanvas = (canvas, x, y, color) => {
    canvas.matrix[x - 1][y - 1] = color;
    console.log(canvas.matrix);
    return canvas.matrix;
};
exports.writingPixelToCanvas = writingPixelToCanvas;
const canvasToPPM = (canvas) => {
    const header = `P3\n${canvas.width} ${canvas.height} \n255`;
    console.log(header);
    const body = "todo";
    const PPMString = `${header}\n${body}`;
    return PPMString;
};
exports.canvasToPPM = canvasToPPM;
// createHTMLCanvas(800, 700, color, "canvas")
// const myHTMLCanvas = document.getElementById('canvas') as HTMLCanvasElement
// writingPixelToHTMLCanvas(myHTMLCanvas, new Color(4, 244, 0))
// canvasToPPM(new Canvas(200, 400))
new types_1.Color(2, 0, 1);
const myCanvas = new types_1.Canvas(8, 1);
console.log(myCanvas);
// writingPixelToCanvas(myCanvas, 1, 1, new Color(0,0,2))
// writingPixelToCanvas(myCanvas, 1, 3, new Color(1, 0, 0))
