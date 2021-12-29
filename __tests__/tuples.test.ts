import { accessTuples, areTuplesEqual, pointOrVector, sumTuple, subtractTuple, negateTuple, multiplyTuple, divideTuple, computeMagnitude, normaliseVector, dotProduct, crossProduct} from "../features/tuples"
import { IPoint, IVector, Vector, Point, Tuple } from "../types/types"

const tuplePoint: IPoint = {
  x: 4.3,
  y: -4.2,
  z: 3.1,
  w: 1.0
}

const tupleVector: IVector = {
  x: 4.3,
  y: -4.2,
  z: 3.1,
  w: 0.0
}

test("Can access point tuple", () => {

  expect(accessTuples(tuplePoint, "x")).toBe(4.3)
  expect(accessTuples(tuplePoint, "y")).toBe(-4.2)
  expect(accessTuples(tuplePoint, "z")).toBe(3.1)
  expect(accessTuples(tuplePoint, "w")).toBe(1.0)
})

test("Can access vector tuple", () => {

  expect(accessTuples(tupleVector, "x")).toBe(4.3)
  expect(accessTuples(tupleVector, "y")).toBe(-4.2)
  expect(accessTuples(tupleVector, "z")).toBe(3.1)
  expect(accessTuples(tupleVector, "w")).toBe(0.0)
})

test("A tuple with w=0.0 is a vector", () => {
  expect(pointOrVector(tupleVector)).toMatch("is a vector")
})

test("A tuple with w=1.0 is a point", () => {
  expect(pointOrVector(tuplePoint)).toMatch("is a point")
})

test("A new Point creates a point", () => {
  const vector = new Vector(3, 5, 6)
  expect(vector).toEqual({
    x: 3,
    y: 5,
    z: 6,
    w: 0,
  })
})

test("A new Vector creates a vector", () => {
  const vector = new Point(3, 5, 6)
  expect(vector).toEqual({
    x: 3,
    y: 5,
    z: 6,
    w: 1,
  })
})

describe("adding tuples", () => {
  it("should correctly add a point and a vector", () => {
    const a = new Point(3, -2, 5)
    const b = new Vector(-2, 3, 1)
    const result = new Point(1, 1, 6)
    expect(sumTuple(a, b)).toEqual(result)
  })

  it("should correctly add two vectors", () => {
    const a = new Vector(3, -2, 5)
    const b = new Vector(-2, 3, 1)
    const result = new Vector(1, 1, 6)
    expect(sumTuple(a, b)).toEqual(result)
  })

  it("should throw when adding two points", () => {
    const a = new Point(3, -2, 5)
    const b = new Point(-2, 3, 1)
    expect(() => {
      sumTuple(a, b)
    }).toThrowError("illegal operation: do not add two points")
  })
})

describe("check whether two tuples are equal", () => {
  const a = 5
  const b = 8.646
  const c = 8.646
  const d = 9.3353367777
  const e = 9.3353367778
  const f = 8.6468

  it("should deliver true if two floats are equal", () => {
    expect(areTuplesEqual(c, b)).toBeTruthy()
  })
  it("should deliver false if two floats are not equal", () => {
    expect(areTuplesEqual(a, c)).toBeFalsy()
  })
  it("should deliver true if two differ only for a value smaller EPSILON", () => {
    expect(areTuplesEqual(d, e)).toBeTruthy()
  })
  it("should deliver true if two differ only for a value bigger than EPSILON", () => {
    expect(areTuplesEqual(c, f)).toBeFalsy()
  })
})

describe("subtract tuples", () => {
  const p1 = new Point(3, 2, 1)
  const p2 = new Point(5, 6, 7)
  const v = new Vector(5, 6, 7)
  const vectorResult = new Vector(-2, -4, -6)
  const pointResult = new Point(-2, -4, -6)
  it("should subtract two points", () => {
    expect(subtractTuple(p1, p2)).toEqual(vectorResult)
  })
  it("should subtract a vector from a point", () => {
    expect(subtractTuple(p1, v)).toEqual(pointResult)
  })

  it("should throw when subtracting a point from a vector", () => {
    expect(() => {
      subtractTuple(v, p2)
    }).toThrowError("illegal operation: do not subtract a point from a vector")
  })
})

describe("negate tuples", () => {
  const vector = new Vector(1, 2, 3)
  const vectorResult = new Vector(-1, -2, -3)
  it("should subtract a vector from the zero vector", () => {
    expect(negateTuple(vector)).toEqual(vectorResult)
  })
})

describe("multiply tuples", () => {
  const tuple = new Tuple(1, -2, 3, -4)
  const scalar = 3.5
  const scalarResult = new Tuple(3.5, -7, 10.5, -14)
  const fraction = 0.5
  const fractionResult = new Tuple(0.5, -1, 1.5, -2)
  it("multiply a tuple by a scalar", () => {
    expect(multiplyTuple(tuple, scalar)).toEqual(scalarResult)
  })
  it("multiply a tuple by a fraction", () => {
    expect(multiplyTuple(tuple, fraction)).toEqual(fractionResult)
  })
})

describe("divide tuples", () => {
  const tuple = new Tuple(1, -2, 3, -4)
  const scalar = 2
  const scalarResult = new Tuple(0.5, -1, 1.5, -2)
  it("Dividing a tuple by a scalar", () => {
    expect(divideTuple(tuple, scalar)).toEqual(scalarResult)
  })
})

describe("find Vector magnitude", () => {
  const vector = new Vector(1, 0, 0)
  const result = Math.sqrt(14)

  it("Computing magnitude f vector (1,0,0)", () => {
    expect(computeMagnitude(vector)).toEqual(1)
  })
  it("Computing magnitude f vector (0,1,0)", () => {
    expect(computeMagnitude(vector)).toEqual(1)
  })
  it("Computing magnitude f vector (0,0,1)", () => {
    expect(computeMagnitude(vector)).toEqual(1)
  })
  it("Computing magnitude f vector (1,2,3)", () => {
    expect(computeMagnitude(new Vector(1, 2, 3))).toEqual(result)
  })
  it("Computing magnitude f vector (-1,-2,-3)", () => {
    expect(computeMagnitude(new Vector(-1, -2, -3))).toEqual(result)
  })
})

describe("normalise vector", () => {
  it("normalising vector (4,0,0)", () => {
    expect(normaliseVector(new Vector(4, 0, 0))).toEqual(new Vector(1, 0, 0))
  })

  it("normalising vector (1,2,3)", () => {
    expect(normaliseVector(new Vector(1, 2, 3))).toEqual(new Vector(1 / Math.sqrt(14), 2 / Math.sqrt(14), 3 / Math.sqrt(14)))
  })
})

describe("dot product ", () => {
  it("dot product of two Vectors", () => {
    expect(dotProduct(new Vector(1, 2, 3), new Vector(2, 3, 4))).toEqual(20)
  })
})

describe("crossProduct", () => {
  const a = new Vector(1, 2, 3)
  const b = new Vector(2, 3, 4)
  it("the cross product of two vectors", () => {
    expect(crossProduct(a, b)).toEqual(new Vector (-1, 2, -1))
  })
  it("the cross product of two vectors", () => {
    expect(crossProduct(b, a)).toEqual(new Vector(1, -2, 1))
  })
})