import { Color, Canvas } from "../types/types"

export const createCanvas = (width: number, height: number, color: Color)  => {
  const canvas = document.createElement('canvas') as HTMLCanvasElement;
  canvas.width = width;
  canvas.height = height;
  canvas.setAttribute("style", `color:rgb(${color.w, color.x, color.y}); border: 3px solid black;`);
  const ctx = canvas.getContext("2d");
  if (ctx) {
    console.log("ctx exitst", ctx)
    ctx.beginPath();
    // if you want to fill the canvas
    // ctx.fillStyle = `rgb(${ color.w, color.x, color.y }`
    // ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.closePath();
  }
  document.body.appendChild(canvas)
}

export const writingPixelToCanvas = (canvas: Canvas, x: number, y: number, color: Color) => {
  return
}

const color = new Color(4, 29, 3, 0)
createCanvas(300, 200, color)