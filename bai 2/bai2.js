"use strict";
class Student1 {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students1 = [];
let student1 = new Student1(1, 20, "nguyenvana@gmail.com");
let student2 = new Student1(2, 25, "nguyenvanb@gmail.com");
let student3 = new Student1(3, 30, "nguyenvanc@gmail.com");
students1.push(student1, student2, student3);
for (let student of students1) {
    console.log("ID: ", student.id);
    console.log("Age: ", student.age);
    console.log("Email: ", student.email);
    console.log("---------------------------");
}
