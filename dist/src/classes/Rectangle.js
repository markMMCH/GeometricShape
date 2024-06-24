"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const GeometricShape_1 = require("./GeometricShape");
class Rectangle extends GeometricShape_1.GeometricShape {
    constructor(_width, _height) {
        super("Rectangle");
        this._width = _width;
        this._height = _height;
    }
    set width(value) { this._width = value; }
    set height(value) { this._height = value; }
    get width() { return this._width; }
    get height() { return this._height; }
    calculateArea() {
        return this._width * this._height;
    }
    calculatePerimeter() {
        return this._height * 2 + this._width * 2;
    }
}
exports.Rectangle = Rectangle;
