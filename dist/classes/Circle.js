"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const GeometricShape_1 = require("./GeometricShape");
class Circle extends GeometricShape_1.GeometricShape {
    constructor(_radius) {
        super('Circle');
        this._radius = _radius;
    }
    set raidus(value) { this._radius = value; }
    get radius() { return this._radius; }
    calculateArea() {
        return Math.PI * this._radius * this._radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this._radius;
    }
}
exports.Circle = Circle;
