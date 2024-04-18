class Employee {
    name:string;
    protected company:string;
    private phone:string;
    constructor (name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void{
        console.log("Name: ", this.name);
        console.log("Company: ", this.company);
        console.log("Phone: ", this.phone);
    }
}
let employee = new Employee("hoa","rikkei soft","012345678");
employee.printInfo();