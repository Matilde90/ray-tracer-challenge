"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossProduct = exports.dotProduct = exports.normaliseVector = exports.computeMagnitude = exports.divideTuple = exports.multiplyTuple = exports.multiplyTupleByScalar = exports.negateTuple = exports.subtractTuple = exports.areTuplesEqual = exports.sumTuple = exports.pointOrVector = exports.accessTuples = void 0;
const types_1 = require("../types/types");
const accessTuples = (a, accessor) => {
    return a[accessor];
};
exports.accessTuples = accessTuples;
const pointOrVector = (a) => {
    return a.w === 1.0 ? "is a point" : a.w === 0.0 ? "is a vector" : "is nor a point nor a vector";
};
exports.pointOrVector = pointOrVector;
const sumTuple = (a, b) => {
    if ((0, exports.pointOrVector)(a) === "is a point" && (0, exports.pointOrVector)(b) === "is a point") {
        throw new Error("illegal operation: do not add two points");
    }
    return new types_1.Tuple(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
};
exports.sumTuple = sumTuple;
const areTuplesEqual = (a, b) => {
    const EPSILON = 0.00001;
    return Math.abs(a - b) < EPSILON ? true : false;
};
exports.areTuplesEqual = areTuplesEqual;
const subtractTuple = (a, b) => {
    if ((0, exports.pointOrVector)(a) === "is a vector" && (0, exports.pointOrVector)(b) === "is a point") {
        throw new Error("illegal operation: do not subtract a point from a vector");
    }
    const x = Math.round((a.x - b.x + Number.EPSILON) * 100000) / 100000;
    const y = Math.round((a.y - b.y + Number.EPSILON) * 100000) / 100000;
    const z = Math.round((a.z - b.z + Number.EPSILON) * 100000) / 100000;
    const w = Math.round((a.w - b.w + Number.EPSILON) * 100000) / 100000;
    return new types_1.Tuple(x, y, z, w);
};
exports.subtractTuple = subtractTuple;
const negateTuple = (tuple) => {
    const zero = new types_1.Vector(0, 0, 0);
    return (0, exports.subtractTuple)(zero, tuple);
};
exports.negateTuple = negateTuple;
const multiplyTupleByScalar = (a, b) => {
    const x = Math.round((a.x * b + Number.EPSILON) * 100000) / 100000;
    const y = Math.round((a.y * b + Number.EPSILON) * 100000) / 100000;
    const z = Math.round((a.z * b + Number.EPSILON) * 100000) / 100000;
    const w = Math.round((a.w * b + Number.EPSILON) * 100000) / 100000;
    return new types_1.Tuple(x, y, z, w);
};
exports.multiplyTupleByScalar = multiplyTupleByScalar;
const multiplyTuple = (a, b) => {
    const x = Math.round((a.x * b.x + Number.EPSILON) * 100000) / 100000;
    const y = Math.round((a.y * b.y + Number.EPSILON) * 100000) / 100000;
    const z = Math.round((a.z * b.z + Number.EPSILON) * 100000) / 100000;
    const w = Math.round((a.w * b.w + Number.EPSILON) * 100000) / 100000;
    return new types_1.Tuple(x, y, z, w);
};
exports.multiplyTuple = multiplyTuple;
const divideTuple = (a, b) => {
    const x = Math.round((a.x / b + Number.EPSILON) * 100000) / 100000;
    const y = Math.round((a.y / b + Number.EPSILON) * 100000) / 100000;
    const z = Math.round((a.z / b + Number.EPSILON) * 100000) / 100000;
    const w = Math.round((a.w / b + Number.EPSILON) * 100000) / 100000;
    return new types_1.Tuple(x, y, z, w);
};
exports.divideTuple = divideTuple;
const computeMagnitude = (v) => {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2) + Math.pow(v.z, 2) + Math.pow(v.w, 2));
};
exports.computeMagnitude = computeMagnitude;
const normaliseVector = (v) => {
    return new types_1.Vector(v.x / (0, exports.computeMagnitude)(v), v.y / (0, exports.computeMagnitude)(v), v.z / (0, exports.computeMagnitude)(v));
};
exports.normaliseVector = normaliseVector;
const dotProduct = (a, b) => {
    return a.x * b.x +
        a.y * b.y +
        a.z * b.z +
        a.w * b.w;
};
exports.dotProduct = dotProduct;
const crossProduct = (a, b) => {
    return new types_1.Vector(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
};
exports.crossProduct = crossProduct;
