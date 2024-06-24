import { GeometricShape } from "./GeometricShape";
export class Triangle extends GeometricShape {
  constructor(
    private _sideA: number,
    private _sideB: number,
    private _sideC: number
  ) {
    super("Triangle");
  }

  set sideA(value: number) { this._sideA = value }
  set sideB(value: number) { this._sideB = value }
  set sideC(value: number) { this._sideC = value }
  get sideA(): number { return this._sideA }
  get sideB(): number { return this._sideB }
  get sideC(): number { return this._sideC }

  calculateArea(): number {
    return Math.sqrt(this.calculatePerimeter() / 2
      * (this.calculatePerimeter() / 2 - this._sideA)
      * (this.calculatePerimeter() / 2 - this._sideB)
      * (this.calculatePerimeter() / 2 - this._sideC));
  }

  calculatePerimeter(): number {
    return this._sideA + this._sideB + this._sideC;
  }
}
