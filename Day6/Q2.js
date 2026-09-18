// Create a class Student having rollNo, name, and marks. Initialize these properties using a 
// constructor. Create an instance method displayResult() that displays student details and determines
// whether the student has passed. Create a static property/method to maintain and 
// display the total number of Student objects created. Create at least three Student objects and demonstrate all methods.
// Concepts Covered: Class, Object, Constructor, Instance Method, Static Method.Class

class Student {
    static totalStudents = 0;
    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.totalStudents++;
    }
    displayResult() {
        console.log("Roll No: " + this.rollNo);
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);
        if (this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
        console.log("<-------------------->");
    }
    static displayTotalStudents() {
        console.log("Total Students: " + Student.totalStudents);
    }
}
let st1 = new Student(101, "Rahul", 75);
let st2 = new Student(102, "Aman", 35);
let st3 = new Student(103, "Priya", 82);
st1.displayResult();
st2.displayResult();
st3.displayResult();
Student.displayTotalStudents();
