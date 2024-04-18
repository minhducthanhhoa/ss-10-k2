"use strict";
class Vehicles {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printinfo() {
        console.log("Name: ", this.name);
        console.log("Year: ", this.year);
        console.log("Company: ", this.company);
        console.log("id: ", this.id);
    }
}
let vehicle = new Vehicles("car", 2022, "toyata", 1);
vehicle.printinfo();
