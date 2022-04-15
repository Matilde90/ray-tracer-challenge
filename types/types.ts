import { NumberOfHumanWorkersPerDataObject } from "aws-sdk/clients/sagemaker";

export type Accessor = keyof Tuple;

export class Point {
  x: number;
  y: number;
  z: number;
  w: 1.0;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = 1.0;
  }
}

export class Vector {
  x: number;
  y: number;
  z: number;
  w: 0.0;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = 0.0;
  }
}

export class Tuple {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
}

export interface IProjectile {
  position: Tuple;
  velocity: Tuple;
}

export class Projectile implements IProjectile {
  position: Tuple;
  velocity: Tuple;
  constructor(position: Tuple, velocity: Tuple) {
    this.position = position;
    this.velocity = velocity
  }
}

export interface IEnvironment {
  gravity: Tuple;
  wind: Tuple;
}

export class Environment implements IEnvironment {
  gravity: Tuple;
  wind: Tuple;
  constructor(gravity: Tuple, wind: Tuple) {
    this.gravity = gravity;
    this.wind = wind;
  }
}

export class Color implements Tuple {
  x: number;
  y: number;
  z: number;
  w: number;
  constructor(x: number, y: number, z: number, w?: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    w ? this.w = w : this.w = 0;
  }
}

export class Canvas {
  width: number;
  height: number;
  color: Color;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.color = new Color(0, 0, 0) // initialised color to black
  }
}