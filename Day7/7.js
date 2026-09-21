class Employee {
    constructor(id, name, basicSalary) {
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

// Derived class
class Manager extends Employee {

    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }
    // Method overriding
    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

// Creating Employee object
let e1 = new Employee(101, "Utkarsh", 30000);
let m1 = new Manager(102, "Rahul", 50000, 10000);

// Display salaries
console.log("Employee Salary:", e1.calculateSalary());
console.log("Manager Salary:", m1.calculateSalary());

//<--------------------------------------------------->//
console.log("<-------------->")
// Call Back Function
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

greetUser("Bob", function() {
    console.log("Callback function executed!");
});

console.log("Start ")
setTimeout(function( ){
    console.log("Task Completed")
},2000)
console.log("End")
console.log("<-------------->")
//Synchronous
console.log(10)
console.log(20)
console.log(40)
console.log(50)
console.log("<-------------->")
//Asynchronous
console.log("Start");
setTimeout(function(){
    console.log("Middle")
},2000)

console.log("End")
//Example
function printName(){
    console.log("Raj");
}
printName();
console.log("Welcome")
function print(){
    setTimeout(() => {
        console.log("Utkarsh");
    }, 2000);
}
print();
