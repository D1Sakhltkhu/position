const student = {
  firstName: "Nika",
  lastName: "Gelashvili",
  grades: [70, 80, 60],

  getAverage(jamshi) {
    for (let i = 0; i < this.grades.length; i++) {
    let jamshi = this.grades[i];
  }
console.log(jamshi / this.grades.lenght);
  }}
  isPassing() {
    if(student.getAverage()>=50){
        console.log(student.firstName + "is Passing" )
    }
    else{console.log(student.firstName + "is not passing")}
  };



 

console.log(student.getAverage());
console.log(student.isPassing())
