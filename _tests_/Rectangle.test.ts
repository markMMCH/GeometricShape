import { Rectangle } from "../src/classes/Rectangle";
describe('GeometricShape Classes', () => {
  test('Rectangle area and perimeter', () => {
    const rectangle = new Rectangle(7, 10);
    expect(rectangle.name).toBe('Rectangle');
    expect(rectangle.calculateArea()).toBe(70);
    expect(rectangle.calculatePerimeter()).toBe(34);

    rectangle.width = 9;
    rectangle.height = 5.4;
    expect(rectangle.calculateArea()).toBe(48.6);
    expect(rectangle.calculatePerimeter()).toBe(28.8);
  });
});