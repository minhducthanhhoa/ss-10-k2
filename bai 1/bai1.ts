class Vehicle {
    name:string;
    year:number;
    company:string;
    constructor (name:string,year:number,company:string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

let vehicle1 = new Vehicle("car",2023,"honda");
let vehicle2 = new Vehicle("motorcycle",2022,"toyata");

console.log(vehicle1.name);
console.log(vehicle1.year);
console.log(vehicle1.company);

console.log(vehicle2.name);
console.log(vehicle2.year);
console.log(vehicle2.company);