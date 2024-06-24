"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const GeometricShape_1 = require("./GeometricShape");
class Triangle extends GeometricShape_1.GeometricShape {
    constructor(_sideA, _sideB, _sideC) {
        super("Triangle");
        this._sideA = _sideA;
        this._sideB = _sideB;
        this._sideC = _sideC;
    }
    set sideA(value) { this._sideA = value; }
    set sideB(value) { this._sideB = value; }
    set sideC(value) { this._sideC = value; }
    get sideA() { return this._sideA; }
    get sideB() { return this._sideB; }
    get sideC() { return this._sideC; }
    calculateArea() {
        return Math.sqrt(this.calculatePerimeter() / 2
            * (this.calculatePerimeter() / 2 - this._sideA)
            * (this.calculatePerimeter() / 2 - this._sideB)
            * (this.calculatePerimeter() / 2 - this._sideC));
    }
    calculatePerimeter() {
        return this._sideA + this._sideB + this._sideC;
    }
}
exports.Triangle = Triangle;
