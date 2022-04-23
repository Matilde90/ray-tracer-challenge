"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = exports.Color = exports.Environment = exports.Projectile = exports.Tuple = exports.Vector = exports.Point = void 0;
class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 1.0;
    }
}
exports.Point = Point;
class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 0.0;
    }
}
exports.Vector = Vector;
class Tuple {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}
exports.Tuple = Tuple;
class Projectile {
    constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
    }
}
exports.Projectile = Projectile;
class Environment {
    constructor(gravity, wind) {
        this.gravity = gravity;
        this.wind = wind;
    }
}
exports.Environment = Environment;
class Color {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        w ? this.w = w : this.w = 0;
    }
}
exports.Color = Color;
class Canvas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.backgroundColor = new Color(255, 255, 255);
        this.matrix = [[]];
        for (let i = 0; i < this.width; i++) {
            this.matrix[i] = [];
            console.log(this.matrix);
            for (let j = 0; j < this.height; j++) {
                console.log("m");
                this.matrix[i][j] = new Color(255, 255, 255);
                ;
            }
        }
    }
}
exports.Canvas = Canvas;
