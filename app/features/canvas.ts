import { Color, Canvas } from "../types/types"

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

export const writingPixelToCanvas = (canvas: Canvas, x: number, y: number, color: Color) => {
  canvas.matrix[x-1][y-1] = color
  console.log(canvas.matrix)
  return canvas.matrix
}

export const canvasToPPM = (canvas: Canvas) => {
  const header = `P3\n${canvas.width} ${canvas.height} \n255`
  console.log(header)
  const body = "todo"
  const PPMString = `${header}\n${body}`
  return PPMString
}

// createHTMLCanvas(800, 700, color, "canvas")
// const myHTMLCanvas = document.getElementById('canvas') as HTMLCanvasElement
// writingPixelToHTMLCanvas(myHTMLCanvas, new Color(4, 244, 0))
// canvasToPPM(new Canvas(200, 400))
new Color(2, 0, 1)
const myCanvas = new Canvas(3, 3)
console.log(myCanvas)
writingPixelToCanvas(myCanvas, 1, 1, new Color(0,0,2))
writingPixelToCanvas(myCanvas, 3, 3, new Color(1, 0, 0))
