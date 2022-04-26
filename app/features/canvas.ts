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
  if (canvas.height < y || canvas.width < x) {
    return new Error("Impossible to write to canvas. Point exceeds canvas dimensions")
  }
  canvas.matrix[x - 1][y - 1] = color
  return canvas.matrix
}

const clampData = (canvas: Canvas, magicNumber: number) => {
  let clampedMatrix = canvas.matrix.map(column => {
    return column.map(row => {
      if (row.x < 0) {
        row.x = 0
      }
      if (row.y < 0) {
        row.y = 0
      }
      if (row.z < 0) {
        row.z = 0
      }
      if (row.x > magicNumber) {
        row.x = magicNumber
      }
      if (row.y > magicNumber) {
        row.y = magicNumber
      }
      if (row.z > magicNumber) {
        row.z = magicNumber
      }
      return row
    })
  })
  canvas.matrix = clampedMatrix
  return canvas
}

const writeBody = (canvas: Canvas) => {
  let clampedData = clampData(canvas, 255)
  let marray = clampedData.matrix.map(column => {
    return column.map(row => {
      return `${row.x} ${row.y} ${row.z} `
    })
  })
  // let body = marray.map(a => a.join("")).join("\n")
  let body = marray.map(a => a.join(""))
  body.map(row => {
    if (row.length > 70) {
      throw new Error("text length is higher than 70")
    }
  })
  return body.join("\n")
}

export const canvasToPPM = (canvas: Canvas) => {
  const magicNumber = 255
  const header = `P3\n${canvas.width} ${canvas.height} \n${magicNumber}`
  const body = writeBody(canvas)
  const PPMString = `${header}\n${body}`
  return PPMString
}

// createHTMLCanvas(800, 700, color, "canvas")
// const myHTMLCanvas = document.getElementById('canvas') as HTMLCanvasElement
// writingPixelToHTMLCanvas(myHTMLCanvas, new Color(4, 244, 0))
// canvasToPPM(new Canvas(200, 400))
new Color(2, 0, 1)
const myCanvas = new Canvas(9, 2)
writingPixelToCanvas(myCanvas, 1, 1, new Color(-88, 0, 258))
writingPixelToCanvas(myCanvas, 3, 3, new Color(-2, 33, 0))
writingPixelToCanvas(myCanvas, 2, 3, new Color(1, 0, 0))
console.log(canvasToPPM(myCanvas))