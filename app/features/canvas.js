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
    return canvas.matrix;
};
exports.writingPixelToCanvas = writingPixelToCanvas;
// const createBlankArrayStructure = (canvas: Canvas) => {
//   let array = [];
//   for (let i = 0; i < canvas.height; i++) {
//     let row = new Array(canvas.width).fill([0, 0, 0])
//     array.push(row)
//   }
//   return array
// }
const writeBody = (canvas, x, y, color) => {
    // let blackBodyArray = createBlankArrayStructure(canvas)
    let matrix = (0, exports.writingPixelToCanvas)(myCanvas, x, y, color);
    console.log(matrix);
};
const canvasToPPM = (canvas) => {
    const magicNumber = 255;
    const header = `P3\n${canvas.width} ${canvas.height} \n${magicNumber}`;
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
const myCanvas = new types_1.Canvas(3, 3);
(0, exports.writingPixelToCanvas)(myCanvas, 1, 1, new types_1.Color(0, 0, 2));
// writingPixelToCanvas(myCanvas, 1, 3, new Color(1, 0, 0))
const body = writeBody(myCanvas, 1, 1, new types_1.Color(0, 0, 2));
