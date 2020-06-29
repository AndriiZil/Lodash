const _ = require('lodash');

// Filtering
const books = [
  { id: 1, name: 'AngularJS' },
  { id: 2, name: 'Vue' },
  { id: 3, name: 'React' },
  { id: 4, name: 'Angular' },
  { id: 5, name: 'Ember' }
];

console.log(_.filter(books, {id: 5})); // => [ { id: 5, name: 'Ember' } ]
console.log(_.filter(books, (book) => book.id > 3)); // => [ { id: 4, name: 'Angular' }, { id: 5, name: 'Ember' } ]

// Generate random number

console.log(_.random(1, 10)); // => 6
console.log(_.random(2.5, 3.5)); // => 3.0339174479977205

// Times
function getRandomNumber() {
  return _.random(1, 10);
}
console.log(_.times(10, getRandomNumber));

// Clone Object
const person = {
  name: 'Bob',
  age: 34,
  job: 'FrontEnd'
}

let clonedPerson = _.clone(person)
console.log(clonedPerson); // => { name: 'Bob', age: 34, job: 'FrontEnd' }

const programingBooks = [
  { name: 'Angular', pages: 250 },
  { name: 'Vue', pages: 275 },
  { name: 'JavaScript', pages: 320 }
];

const clonedBooks = _.clone(programingBooks);
console.log(clonedBooks); /*
  [
    { name: 'Angular', pages: 250 },
    { name: 'Vue', pages: 275 },
    { name: 'JavaScript', pages: 320 }
  ]
*/

const city = {
  name: 'Moscow',
  population: 32655
}

const deepCloned = _.cloneDeep(city);
console.log(deepCloned); // => { name: 'Moscow', population: 32655 }

// Compare objects
const book1 = { name: 'Angular', pages: 251 }
const book2 = { name: 'Angular', pages: 251 }

console.log(_.isEqual(book1, book2)); // => true

// Pick properties
const people = {
  name: 'Bob',
  age: 45,
  job: 'Backend',
  city: 'Moscow'
}

console.log(_.pick(people, ['age', 'city'])); // => { age: 45, city: 'Moscow' }
console.log(_.omit(people, ['age', 'name'])); // => { job: 'Backend', city: 'Moscow' }

// Get/Set property value
let user = {
  name: 'Ted'
}

console.log(_.get(user, 'age', 0)); // => 0

// Check empty

console.log(_.isEmpty({})); // => true
console.log(_.isEmpty([])); // => true
console.log(_.isEmpty(undefined)); // => true
console.log(_.isEmpty(null)); // => true
console.log(_.isEmpty('')); // => true

// Sorting array
const pBooks = [
  { name: 'Angular', price: 24 },
  { name: 'JS', price: 32 },
  { name: 'Ember', price: 29 },
  { name: 'Vue', price: 12 }
];

let sorted = _.sortBy(pBooks, ['price'])
console.log(sorted); /*
  [
    { name: 'Vue', price: 12 },
    { name: 'Angular', price: 24 },
    { name: 'Ember', price: 29 },
    { name: 'JS', price: 32 }
  ]
*/
console.log(_.orderBy(pBooks, ['name', 'asc'])); // => desc
/*
  [
    { name: 'Angular', price: 24 },
    { name: 'Ember', price: 29 },
    { name: 'JS', price: 32 },
    { name: 'Vue', price: 12 }
  ]
 */

// Merge arrays

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]

const mergedArr = _.concat(arr1, arr2, arr3)
console.log(mergedArr); /* => [1, 2, 3, 4, 5,6, 7, 8, 9] */