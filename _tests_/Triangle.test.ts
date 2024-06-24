import { Triangle } from '../src/classes/Triangle';
describe('GeometricShape Classes', () => {
  test('Triangle area and perimeter', () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.name).toBe('Triangle');
    expect(triangle.calculateArea()).toBe(6);
    expect(triangle.calculatePerimeter()).toBe(12);

    triangle.sideA = 5;
    triangle.sideB = 7;
    triangle.sideC = 11;
    expect(triangle.calculateArea()).toBeCloseTo(12.969, 3);
    expect(triangle.calculatePerimeter()).toBe(23);
  });
});