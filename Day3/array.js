console.log("===String Obejct======");

let str = "Welcome JavaScript";
console.log("Upper Case = " , str.toUpperCase());

console.log("Lower Case = " , str.toLowerCase());

console.log("\n<----Last Index---->");

let message = "JavaScript is a easy language";

console.log("Last Index = " , message.lastIndexOf("avaScript"));

//Slice()
console.log( "Slice = " , message.slice(0,7));

// Split()
let data = "HTMl , CSS ,JAVA ,C++";
let result = data.split(",");
console.log("Split= ", result);

//replace()
let text = "I love java";
console.log(text.replace("java" , "JavaScript"));

//concatenate()
let first = "Rajkumar";
let last = "Rana";
console.log( 
    first.concat(" ",last)
);


//------Include Method--
let course = "JavaScript";
console.log(
    course.includes("Script")
);
console.log(
    course.includes("Bad")
);

//<-----Array Objects---->
console.log("<===Array Obejct======>");

let numbers = [10,20,30,50,55];
console.log(numbers[0]);
console.log(numbers[4]);

//push
numbers.push(60);
console.log(numbers);

//Shift
console.log(numbers.shift()); // 10 (removed)
console.log("Shift= " ,numbers);

//Unshift
numbers.unshift(10); 
console.log(numbers);
numbers.unshift(5, 7); 
console.log(numbers);

//<------Date Object------>
console.log("<===Date Obejct======>");
let date = new Date();
console.log(date);

//get date
console.log (
    "Date: ", 
    date.getDate()
);
//getMonth
console.log(
    "Month: ",
     date.getMonth() + 1
);
//get Year
console.log(
    "Year: ",
     date.getFullYear()
);
//getDay
console.log("Day of Week: ", date.getDay()); 
//get Time
console.log("Time: ", date.getTime());

//<----Maths Objects--->
console.log("\n<===Maths Obejct======>");
console.log("PI: ", Math.PI);

//Round
console.log("Rounding: " ,Math.round(4.7));

//Floor
console.log("Floor: ", Math.floor(4.6));
//power
console.log("Power: ", Math.pow(2,4));
//Square Root
console.log("Square Root: ", Math.sqrt(16));
//Cube Root
console.log("Cube Root: ", Math.cbrt(27));
//MIn
console.log("Minimum: ", Math.min(10,20,30,4,50));
//Max
console.log("Minimum: ", Math.max(10,20,30,4,50));

