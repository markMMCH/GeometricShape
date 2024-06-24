import { GeometricShape } from "./GeometricShape";

export class Circle extends GeometricShape {

  constructor(private _radius: number) {
    super('Circle');
  }

  set raidus(value: number) { this._radius = value }
  get radius(): number { return this._radius }

  calculateArea(): number {
    return Math.PI * this._radius * this._radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this._radius;
  }

}