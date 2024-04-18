class Circles{
    private radius:number;
    constructor(radius:number){
        this.radius = radius;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(newRadius:number){
        this.radius = newRadius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    getCircumference(){
        return Math.PI * 2 * this.radius;
    }
}

let circles = new Circles(5);
console.log("Bán kính: ", circles.getRadius());
console.log("Diện tích: ", circles.getArea());
console.log("Chu vi: ", circles.getCircumference());

circles.setRadius(7);
console.log("Bán kính mới: ", circles.getRadius());
console.log("Diện tích mới: ", circles.getArea());
console.log("Chu vi mới: ", circles.getCircumference());