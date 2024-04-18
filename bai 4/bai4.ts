class Vehicles{
    name:string;
    protected year:number;
    private company:string;
    readonly id:number;
    constructor (name:string,year:number,company:string,id:number){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printinfo(): void{
        console.log("Name: ", this.name);
        console.log("Year: ", this.year);
        console.log("Company: ", this.company);
        console.log("id: ", this.id);
    }
}
let vehicle = new Vehicles("car",2022,"toyata",1);
vehicle.printinfo();