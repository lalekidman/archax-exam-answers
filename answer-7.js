function sortByDateHired (employees) {
  for (let i = 1; i < employees.length; i++) {
    // converting dateHired to be milis to easily and accurate sorting.
    if (employees[i - 1].dateHired > employees[i].dateHired) {
    // if (employees[i - 1].dateHired.getTime() > employees[i].dateHired.getTime()) {
      // store the left element to a new variable for it to not be overriden by the new left element(right element)
      const tmpNode = employees[i - 1];
      // override the left element to right element
      employees[i - 1] = employees[i]
      // set the right element to be the previous left element
      employees[i] = tmpNode
      // call recursively to apply the sort again to the sorted employee
      sortByDateHired(employees)
    }
  }
  return employees
}



const sortedEmployees = sortByDateHired([
  {
    name: "John Doe One",
    // dateHired: new Date(),
    dateHired: 4,
  },
  {
    name: "John Doe Two",
    // dateHired: new Date(),
    dateHired: 2,
  },
  {
    name: "John Doe Three",
    // dateHired: new Date(),
    dateHired: 5,
  },
  {
    name: "John Doe Four",
    // dateHired: new Date(),
    dateHired: 2,
  },
  {
    name: "John Doe Five",
    // dateHired: new Date(),
    dateHired: 3,
  },
])
console.log('sortedEmployees :>> ', sortedEmployees);