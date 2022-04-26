import { Color, Canvas } from "../types/types"

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
  return marray.map(a => a.join("")).join("\n")
}

export const canvasToPPM = (canvas: Canvas) => {
  const magicNumber = 255
  const header = `P3\n${canvas.width} ${canvas.height} \n${magicNumber}`
  const body = writeBody(canvas)
  const PPMString = `${header}\n${body}`
  return PPMString
}

// tests to run
new Color(2, 0, 1)
const myCanvas = new Canvas(10, 4)
writingPixelToCanvas(myCanvas, 1, 1, new Color(-88, 0, 258))
writingPixelToCanvas(myCanvas, 3, 3, new Color(-2, 33, 0))
writingPixelToCanvas(myCanvas, 2, 3, new Color(1, 7, 0))
writingPixelToCanvas(myCanvas, 1, 2, new Color(90, 0, 0))
console.log(canvasToPPM(myCanvas))