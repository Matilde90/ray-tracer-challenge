import { Accessor, Tuple, Vector } from "../types/types"

export const accessTuples = (a: Tuple, accessor: Accessor): number => {
  return a[accessor]
}

export const pointOrVector = (a: Tuple): string => {
  return a.w === 1.0 ? "is a point" : a.w === 0.0 ? "is a vector" : "is nor a point nor a vector";
}

export const sumTuple = (a: Tuple, b: Tuple): Tuple | Error => {
  if (pointOrVector(a) === "is a point" && pointOrVector(b) === "is a point") {
    throw new Error("illegal operation: do not add two points")
  }
  return new Tuple(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w)
}

export const areTuplesEqual = (a: number, b: number): boolean => {
  const EPSILON: number = 0.00001
  return Math.abs(a - b) < EPSILON ? true : false
}

export const subtractTuple = (a: Tuple, b: Tuple): Tuple | Error => {
  if (pointOrVector(a) === "is a vector" && pointOrVector(b) === "is a point") {
    throw new Error("illegal operation: do not subtract a point from a vector")
  }
  const x = Math.round((a.x - b.x + Number.EPSILON) * 100000) / 100000
  const y = Math.round((a.y - b.y + Number.EPSILON) * 100000) / 100000
  const z = Math.round((a.z - b.z + Number.EPSILON) * 100000) / 100000
  const w = Math.round((a.w - b.w + Number.EPSILON) * 100000) / 100000

  return new Tuple(x, y, z, w)
}

export const negateTuple = (tuple: Tuple): Tuple | Error => {
  const zero = new Vector(0, 0, 0)
  return subtractTuple(zero, tuple)
}

export const multiplyTupleByScalar = (a: Tuple, b: number): Tuple => {
  const x = Math.round((a.x * b + Number.EPSILON) * 100000) / 100000
  const y = Math.round((a.y * b + Number.EPSILON) * 100000) / 100000
  const z = Math.round((a.z * b + Number.EPSILON) * 100000) / 100000
  const w = Math.round((a.w * b + Number.EPSILON) * 100000) / 100000
  return new Tuple(x, y, z, w)
}

export const multiplyTuple = (a: Tuple, b: Tuple): Tuple => {
  const x = Math.round((a.x * b.x + Number.EPSILON) * 100000) / 100000
  const y = Math.round((a.y * b.y + Number.EPSILON) * 100000) / 100000
  const z = Math.round((a.z * b.z + Number.EPSILON) * 100000) / 100000
  const w = Math.round((a.w * b.w + Number.EPSILON) * 100000) / 100000
  return new Tuple(x, y, z, w)
}

export const divideTuple = (a: Tuple, b: number): Tuple => {
  const x = Math.round((a.x / b + Number.EPSILON) * 100000) / 100000
  const y = Math.round((a.y / b + Number.EPSILON) * 100000) / 100000
  const z = Math.round((a.z / b + Number.EPSILON) * 100000) / 100000
  const w = Math.round((a.w / b + Number.EPSILON) * 100000) / 100000
  return new Tuple(x, y, z, w)
}

export const computeMagnitude = (v: Vector): number => {
  return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2) + Math.pow(v.z, 2) + Math.pow(v.w, 2))
}

export const normaliseVector = (v: Vector): Vector => {
  return new Vector(v.x / computeMagnitude(v), v.y / computeMagnitude(v), v.z / computeMagnitude(v))
}

export const dotProduct = (a: Tuple, b: Tuple): number => {
  return a.x * b.x +
    a.y * b.y +
    a.z * b.z +
    a.w * b.w
}

export const crossProduct = (a: Vector, b: Vector): Vector => {
  return new Vector(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x)
}
