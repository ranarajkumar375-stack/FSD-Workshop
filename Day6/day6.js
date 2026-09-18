class A{
    name;
    name = "Utkarsh";
    show(){
        console.log("My name: " + this.name);
    }
}
let obj  = new A();
obj.show();

class Hello1 {

}

let h1 = new Hello1("Ud");

//without constructor
class Hello2 {
    faculty = "Utkarsh";
}

let h2 = new Hello2();
console.log(h2.faculty);

//simple example of class
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

//static property and method
class Hello3{
    static name = "Example of static variable and method";
    static show(){
        console.log("Hello class this is "+ Hello3.name);
    }
}
Hello3.show();

//static method with static variable
class Hello4{
    static name= "Example of static method without static variable";
    static show(){
        console.log("Hello class this is "+Hello4.name);
    }
}
Hello4.show();

//static method with instance variable
class Hello5{
    static name= "Example of static method with instance variable";
    constructor() {
        this.instanceVar = "Instance variable";
    }
    show() {
        console.log("Static variable: " + Hello5.name );
        console.log("Instance variable: " + this.instanceVar);
}
}
let h5 = new Hello5();
h5.show();

//static method with instance method without constructor
class Student{
    static college = "ABES";
    name = "RAJ";
    show(){
    console.log("Static: "+ Student.college);
    console.log("Instance:  "+ this.name);
    }
}
let Object =  new Student();
Object.show();

