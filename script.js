// Task 1
const hello = "Hello "
const world = "World"

const joinString = (x, y) => x + y

console.log(joinString(hello, world))

// Task 2
const multiply = (x, y = 1) => x * y

console.log(multiply(2, 5))
console.log(multiply(5))

// Task 3
let average = (...numbers) => numbers.reduce( ( x, y ) => x + y, 0 ) / numbers.length;

console.log(average(1, 3, 6, 6))

// Task 4
average = ([...numbers]) => numbers.reduce( ( x, y ) => x + y, 0 ) / numbers.length;
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average(grades))

// Task 5
const data = [1, 4, 'Iwona', false, 'Nowak']
const [ , , firstName, , lastname] = data
console.log(firstName, lastname)