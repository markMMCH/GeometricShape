export abstract class GeometricShape {
  constructor(public name: string) { }
  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
}