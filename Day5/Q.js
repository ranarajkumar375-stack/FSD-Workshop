// Q4. Student Grade:
// Create an object with:
// name = "Ravi"
// marks = 80
// grade = "A"
// Create a method updateGrade() that changes the grade to:
// A+
// using the this keyword.
// Display the updated information.
const student = {
  name: "Ravi",
  marks: 80,
  grade: "A",

  updateGrade: function(newGrade = "A+") {
    this.grade = newGrade;
  }
};

student.updateGrade("A+");
console.log(student);