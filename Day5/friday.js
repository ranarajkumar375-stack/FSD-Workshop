function addNumbers(...numbers) {
    console.log(numbers);
}
addNumbers(10, 20, 30, 40); 

// function sum(...nums) {
//     let total = 0;
//     for (let num of nums) {
//         total += num;
//     }
//     return total;
// }
// console.log(sum(5, 10, 20)); 

function sum(name, ...numbers) {
  console.log("Hello " + name);
  let total = numbers.reduce((acc, num) => acc + num, 0);
  console.log("Total = " + total);
}
sum("Raj", 10, 20, 30, 40);
sum("WebDev", 5, 10, 20);

