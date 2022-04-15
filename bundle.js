(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writingPixelToCanvas = exports.createCanvas = void 0;
const types_1 = require("../types/types");
const createCanvas = (width, height, color) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.setAttribute("style", `color:rgb(${color.w, color.x, color.y}); border: 3px solid black;`);
    const ctx = canvas.getContext("2d");
    if (ctx) {
        console.log("ctx exitst", ctx);
        ctx.beginPath();
        // if you want to fill the canvas
        // ctx.fillStyle = `rgb(${ color.w, color.x, color.y }`
        // ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.closePath();
    }
    document.body.appendChild(canvas);
};
exports.createCanvas = createCanvas;
const writingPixelToCanvas = (canvas, x, y, color) => {
    return;
};
exports.writingPixelToCanvas = writingPixelToCanvas;
const color = new types_1.Color(4, 29, 3, 0);
(0, exports.createCanvas)(300, 200, color);

},{"../types/types":2}],2:[function(require,module,exports){
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
        this.color = new Color(0, 0, 0); // initialised color to black
    }
}
exports.Canvas = Canvas;

},{}]},{},[1]);
