import { Circle } from "../src/Circle";
describe('GeometricShape Classes', () => {
  test('Circle area and perimeter', () => {
    const circle = new Circle(5);
    expect(circle.name).toBe('Circle');
    expect(circle.calculateArea()).toBeCloseTo(78.5398, 4);
    expect(circle.calculatePerimeter()).toBeCloseTo(31.4159, 4);

    circle.raidus = 10;
    expect(circle.calculateArea()).toBeCloseTo(314.1593, 4);
    expect(circle.calculatePerimeter()).toBeCloseTo(62.8319, 4);
  });
});