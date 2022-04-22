import { Color, Canvas } from "../types/types"

export const createCanvas = (width: number, height: number, color: Color, id: string) => {
  const canvas = document.createElement('canvas') as HTMLCanvasElement;
  canvas.id = id;
  canvas.width = width;
  canvas.height = height;
  canvas.setAttribute("style", `color:rgb(${color.x},${color.y},${color.z}); border: 10px solid black;`);
  const ctx = canvas.getContext("2d");
  document.body.appendChild(canvas)
}

export const writingPixelToCanvas = (canvas: HTMLCanvasElement, x: number, y: number, color: Color) => {
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    ctx.beginPath();
    ctx.fillStyle = `rgb(${color.x},${color.y},${color.z})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.closePath();
  return
}

export const canvasToPPM = (canvas: Canvas) => {
  const header = `P3\n${canvas.width} ${canvas.height} \n255`
  console.log(header)
  const body = "todo"
  const PPMString = `${header}\n${body}`
  return PPMString
}


const color = new Color(255, 26, 0, 0)
console.log(`x: ${color.x}, ${color.y}, ${color.z}`)
createCanvas(800, 700, color, "canvas")
const myCanvas = document.getElementById('canvas') as HTMLCanvasElement
writingPixelToCanvas(myCanvas, 200, 5, new Color(4, 244, 0))
canvasToPPM(new Canvas(200,400))
