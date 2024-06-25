import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Triangle } from "./Triangle";

export function main() {
  const circle = new Circle(5);
  console.log(`Area of ${circle.name}:`, circle.calculateArea());
  console.log(`Perimeter of ${circle.name}:`, circle.calculatePerimeter());

  const rectangle = new Rectangle(10, 5);
  console.log(`Area of ${rectangle.name}:`, rectangle.calculateArea());
  console.log(`Perimeter of ${rectangle.name}:`, rectangle.calculatePerimeter());

  const triangle = new Triangle(4, 5, 6);
  console.log(`Area of ${triangle.name}:`, triangle.calculateArea());
  console.log(`Perimeter of ${triangle.name}:`, triangle.calculatePerimeter());
}

main()