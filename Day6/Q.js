// Create  a class Sec A and display the data of 5 students using constructor.
// name , roll_no. , add. , Mobile_no.


class student{
    constructor(rollNo, name, age){
        this.rollNo= rollNo;
        this.name= name;
        this.age= age;
        console.log("Roll No: "+ this.rollNo);
        console.log("Name: "+ this.name);
        console.log("Age: "+ this.age);
    }
}

let s=new student();
let s1=new student(82,"utkarsh",28);
let s2=new student(1,"Gxy",28)

