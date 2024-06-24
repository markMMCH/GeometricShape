import { GeometricShape } from "./GeometricShape";
export class Rectangle extends GeometricShape {

  constructor(private _width: number, private _height: number) {
    super("Rectangle");
  }

  set width(value: number) {this._width = value}
  set height(value: number) { this._height = value }
  get width(): number { return this._width }
  get height(): number { return this._height }

  calculateArea(): number {
    return this._width * this._height;
  }

  calculatePerimeter(): number {
    return this._height * 2 + this._width * 2;
  }
}