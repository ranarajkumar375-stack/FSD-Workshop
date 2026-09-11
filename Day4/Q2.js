//Ceate an object employee with :
// name = aman
//salary = 70
//create a method addMarks() that increase the salary using 'this.'

const a = {
    name : "Rahul",
    salary : 15000 ,
    display : function(){
        console.log("This is my name: " + this.name )
        console.log("This is my salary: " + this.salary )
    },
    incSal : function(){
        this.salary = this.salary + 5000
    }
}
a.display()
a.incSal()
a.display()