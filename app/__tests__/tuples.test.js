"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tuples_1 = require("../features/tuples");
const types_1 = require("../types/types");
const tuplePoint = {
    x: 4.3,
    y: -4.2,
    z: 3.1,
    w: 1.0
};
const tupleVector = {
    x: 4.3,
    y: -4.2,
    z: 3.1,
    w: 0.0
};
test("Can access point tuple", () => {
    expect((0, tuples_1.accessTuples)(tuplePoint, "x")).toBe(4.3);
    expect((0, tuples_1.accessTuples)(tuplePoint, "y")).toBe(-4.2);
    expect((0, tuples_1.accessTuples)(tuplePoint, "z")).toBe(3.1);
    expect((0, tuples_1.accessTuples)(tuplePoint, "w")).toBe(1.0);
});
test("Can access vector tuple", () => {
    expect((0, tuples_1.accessTuples)(tupleVector, "x")).toBe(4.3);
    expect((0, tuples_1.accessTuples)(tupleVector, "y")).toBe(-4.2);
    expect((0, tuples_1.accessTuples)(tupleVector, "z")).toBe(3.1);
    expect((0, tuples_1.accessTuples)(tupleVector, "w")).toBe(0.0);
});
test("A tuple with w=0.0 is a vector", () => {
    expect((0, tuples_1.pointOrVector)(tupleVector)).toMatch("is a vector");
});
test("A tuple with w=1.0 is a point", () => {
    expect((0, tuples_1.pointOrVector)(tuplePoint)).toMatch("is a point");
});
test("A new Point creates a point", () => {
    const vector = new types_1.Vector(3, 5, 6);
    expect(vector).toEqual({
        x: 3,
        y: 5,
        z: 6,
        w: 0,
    });
});
test("A new Vector creates a vector", () => {
    const vector = new types_1.Point(3, 5, 6);
    expect(vector).toEqual({
        x: 3,
        y: 5,
        z: 6,
        w: 1,
    });
});
describe("adding tuples", () => {
    it("should correctly add a point and a vector", () => {
        const a = new types_1.Point(3, -2, 5);
        const b = new types_1.Vector(-2, 3, 1);
        const result = new types_1.Point(1, 1, 6);
        expect((0, tuples_1.sumTuple)(a, b)).toEqual(result);
    });
    it("should correctly add two vectors", () => {
        const a = new types_1.Vector(3, -2, 5);
        const b = new types_1.Vector(-2, 3, 1);
        const result = new types_1.Vector(1, 1, 6);
        expect((0, tuples_1.sumTuple)(a, b)).toEqual(result);
    });
    it("should throw when adding two points", () => {
        const a = new types_1.Point(3, -2, 5);
        const b = new types_1.Point(-2, 3, 1);
        expect(() => {
            (0, tuples_1.sumTuple)(a, b);
        }).toThrowError("illegal operation: do not add two points");
    });
});
describe("check whether two tuples are equal", () => {
    const a = 5;
    const b = 8.646;
    const c = 8.646;
    const d = 9.3353367777;
    const e = 9.3353367778;
    const f = 8.6468;
    it("should deliver true if two floats are equal", () => {
        expect((0, tuples_1.areTuplesEqual)(c, b)).toBeTruthy();
    });
    it("should deliver false if two floats are not equal", () => {
        expect((0, tuples_1.areTuplesEqual)(a, c)).toBeFalsy();
    });
    it("should deliver true if two differ only for a value smaller EPSILON", () => {
        expect((0, tuples_1.areTuplesEqual)(d, e)).toBeTruthy();
    });
    it("should deliver true if two differ only for a value bigger than EPSILON", () => {
        expect((0, tuples_1.areTuplesEqual)(c, f)).toBeFalsy();
    });
});
describe("subtract tuples", () => {
    const p1 = new types_1.Point(3, 2, 1);
    const p2 = new types_1.Point(5, 6, 7);
    const v = new types_1.Vector(5, 6, 7);
    const vectorResult = new types_1.Vector(-2, -4, -6);
    const pointResult = new types_1.Point(-2, -4, -6);
    it("should subtract two points", () => {
        expect((0, tuples_1.subtractTuple)(p1, p2)).toEqual(vectorResult);
    });
    it("should subtract a vector from a point", () => {
        expect((0, tuples_1.subtractTuple)(p1, v)).toEqual(pointResult);
    });
    it("should throw when subtracting a point from a vector", () => {
        expect(() => {
            (0, tuples_1.subtractTuple)(v, p2);
        }).toThrowError("illegal operation: do not subtract a point from a vector");
    });
});
describe("negate tuples", () => {
    const vector = new types_1.Vector(1, 2, 3);
    const vectorResult = new types_1.Vector(-1, -2, -3);
    it("should subtract a vector from the zero vector", () => {
        expect((0, tuples_1.negateTuple)(vector)).toEqual(vectorResult);
    });
});
describe("multiply tuples", () => {
    const tuple = new types_1.Tuple(1, -2, 3, -4);
    const scalar = 3.5;
    const scalarResult = new types_1.Tuple(3.5, -7, 10.5, -14);
    const fraction = 0.5;
    const fractionResult = new types_1.Tuple(0.5, -1, 1.5, -2);
    it("multiply a tuple by a scalar", () => {
        expect((0, tuples_1.multiplyTupleByScalar)(tuple, scalar)).toEqual(scalarResult);
    });
    it("multiply a tuple by a fraction", () => {
        expect((0, tuples_1.multiplyTupleByScalar)(tuple, fraction)).toEqual(fractionResult);
    });
});
describe("divide tuples", () => {
    const tuple = new types_1.Tuple(1, -2, 3, -4);
    const scalar = 2;
    const scalarResult = new types_1.Tuple(0.5, -1, 1.5, -2);
    it("Dividing a tuple by a scalar", () => {
        expect((0, tuples_1.divideTuple)(tuple, scalar)).toEqual(scalarResult);
    });
});
describe("find Vector magnitude", () => {
    const vector = new types_1.Vector(1, 0, 0);
    const result = Math.sqrt(14);
    it("Computing magnitude f vector (1,0,0)", () => {
        expect((0, tuples_1.computeMagnitude)(vector)).toEqual(1);
    });
    it("Computing magnitude f vector (0,1,0)", () => {
        expect((0, tuples_1.computeMagnitude)(vector)).toEqual(1);
    });
    it("Computing magnitude f vector (0,0,1)", () => {
        expect((0, tuples_1.computeMagnitude)(vector)).toEqual(1);
    });
    it("Computing magnitude f vector (1,2,3)", () => {
        expect((0, tuples_1.computeMagnitude)(new types_1.Vector(1, 2, 3))).toEqual(result);
    });
    it("Computing magnitude f vector (-1,-2,-3)", () => {
        expect((0, tuples_1.computeMagnitude)(new types_1.Vector(-1, -2, -3))).toEqual(result);
    });
});
describe("normalise vector", () => {
    it("normalising vector (4,0,0)", () => {
        expect((0, tuples_1.normaliseVector)(new types_1.Vector(4, 0, 0))).toEqual(new types_1.Vector(1, 0, 0));
    });
    it("normalising vector (1,2,3)", () => {
        expect((0, tuples_1.normaliseVector)(new types_1.Vector(1, 2, 3))).toEqual(new types_1.Vector(1 / Math.sqrt(14), 2 / Math.sqrt(14), 3 / Math.sqrt(14)));
    });
});
describe("dot product ", () => {
    it("dot product of two Vectors", () => {
        expect((0, tuples_1.dotProduct)(new types_1.Vector(1, 2, 3), new types_1.Vector(2, 3, 4))).toEqual(20);
    });
});
describe("crossProduct", () => {
    const a = new types_1.Vector(1, 2, 3);
    const b = new types_1.Vector(2, 3, 4);
    it("the cross product of two vectors", () => {
        expect((0, tuples_1.crossProduct)(a, b)).toEqual(new types_1.Vector(-1, 2, -1));
    });
    it("the cross product of two vectors", () => {
        expect((0, tuples_1.crossProduct)(b, a)).toEqual(new types_1.Vector(1, -2, 1));
    });
});
describe("colors operations", () => {
    const c1 = new types_1.Color(0.9, 0.6, 0.75);
    const c2 = new types_1.Color(0.7, 0.1, 0.25);
    it("it should add colors correctly", () => {
        expect((0, tuples_1.sumTuple)(c1, c2)).toEqual(new types_1.Color(1.6, 0.7, 1.0));
    });
    it("it should subtract colors correctly", () => {
        console.log(c1, "c1");
        console.log(c2, "c2");
        expect((0, tuples_1.subtractTuple)(c1, c2)).toEqual(new types_1.Color(0.2, 0.5, 0.5));
    });
    it("it should multiply color by a scalar", () => {
        expect((0, tuples_1.multiplyTupleByScalar)(new types_1.Color(0.2, 0.3, 0.4), 2)).toEqual(new types_1.Color(0.4, 0.6, 0.8));
    });
    it("it should multiply color", () => {
        expect((0, tuples_1.multiplyTuple)(new types_1.Color(1, 0.2, 0.4), new types_1.Color(0.9, 1, 0.1))).toEqual(new types_1.Color(0.9, 0.2, 0.04));
    });
});
// describe("Write pixel to canvas", () => {
//   const c = new Canvas(10, 20, "canvas")
//   const color = new Color(0, 0, 0)
//   it("write pixel should work", () => {
//     expect(writingPixelToCanvas(c, 10, 20, color))
//   })
// })
