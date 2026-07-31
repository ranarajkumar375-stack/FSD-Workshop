//const { jsx } = require("react/jsx-runtime");

console.log("===Variables===");

var text = "Name - Rakumar Rana";
console.log(text);


console.log("\n===If Else===");
var a =40;
var b =30;

if (a>b){
      console.log("A is greater . value of A=",a)
}
else {
    console.log("B is greater . value of B=",b)
}

// -------------
//   Functions
// ----------------
console.log("\n===Function===");

function abes(){
    console.log("Welcome students")
    console.log("Here we are studying Node.js")
}
abes();
console.log("\n===Function with parameters===");

function name(first , last){
    console.log("Hello" , first ,last);
}
name("Rajkumar","Rana");

console.log("\n===Function Returns===");
function add(x,y){
    return x+y;
}
var result = add(10,40);
console.log("Sum = " , result);

console.log("\n===Default Arguments===");
function fullName(first="ABES" ,last = "Engineering College"){
    return first + " " + last;
}
console.log(fullName());
console.log(fullName("Rajkumar","rana"));

console.log("\n===Percentage===");
function totalMarks(maths,english,science){
    return maths + english + science;
}
function percentage(total){
    return (total/300) * 100;
}
var total = totalMarks(80,70,95);

console.log("Total Marks =" , total);
console.log("Perecentage =" , percentage(total));

console.log("\n===While Loop===");
var a= 0;
while ( a<10){
    console.log(a);
    a++;
};
