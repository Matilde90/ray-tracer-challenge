export interface ITuple {
  x: number;
  y: number;
  z: number;
  w: number;
}

export type Accessor = "x" | "y" | "w" | "z"

export class Point implements ITuple {
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

export class Vector implements ITuple {
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

export class Tuple implements ITuple {
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
  position: ITuple;
  velocity: ITuple;
}

export class Projectile implements IProjectile {
  position: ITuple;
  velocity: ITuple;
  constructor(position: ITuple, velocity: ITuple) {
    this.position = position;
    this.velocity = velocity
  }
}

export interface IEnvironment {
  gravity: ITuple;
  wind: ITuple;
}

export class Environment implements IEnvironment {
  gravity: ITuple;
  wind: ITuple;
  constructor(gravity: ITuple, wind: ITuple) {
    this.gravity = gravity;
    this.wind = wind;
  }
}

