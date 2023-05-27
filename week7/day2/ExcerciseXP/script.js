//task 1.1
// ["bread", "carrot", "potato", "chicken", "apple", "orange"]
//task 1.2
// ["U", "S", "A"]
//task 1.3
// [undefined, undefined]

// task 2
// const users = [
//     { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
  
  // task 2.1
//   const welcomeStudents = users.map(user => `Hello ${user.firstName}`)
//   console.log(welcomeStudents)
  
  // task 2.2
//   const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident')
//   console.log(fullStackResidents)
  
  // task 2.3
//   const fullStackResidentsLastNames = users
//     .filter(user => user.role === 'Full Stack Resident')
//     .map(user => user.lastName)
//   console.log(fullStackResidents

//task 3
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']

// const combinedString = epic.reduce((accumulator, currentValue) => {
//   return accumulator + ' ' + currentValue
// })

// console.log(combinedString)

//task4
const students = [
    {name: "Ray", course: "Computer Science", isPassed: true},
    {name: "Liam", course: "Computer Science", isPassed: false},
    {name: "Jenner", course: "Information Technology", isPassed: true},
    {name: "Marco", course: "Robotics", isPassed: true},
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
    {name: "Jamie", course: "Big Data", isPassed: false}]
  
  const passedStudents = students.filter(student => student.isPassed)
  
  passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`)
  })