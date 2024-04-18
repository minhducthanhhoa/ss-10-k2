"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(newWidth) {
        this.width = newWidth;
    }
    getHeight() {
        return this.height;
    }
    setHeight(newHeight) {
        this.height = newHeight;
    }
    getArea() {
        return this.width * this.height;
    }
    getCircumference() {
        return (this.width + this.height) * 2;
    }
}
let rectangle = new Rectangle(3, 5);
console.log("Chiều rộng: ", rectangle.getWidth());
console.log("Chiều dài: ", rectangle.getHeight());
console.log("Chu vi: ", rectangle.getCircumference());
console.log("Diện tích: ", rectangle.getArea());
console.log("------------------------");
rectangle.setWidth(7);
rectangle.setHeight(9);
console.log("Chiều rộng mới: ", rectangle.getWidth());
console.log("Chiều dài mới: ", rectangle.getHeight());
console.log("Chu vi mới: ", rectangle.getCircumference());
console.log("Diện tích mới: ", rectangle.getArea());
