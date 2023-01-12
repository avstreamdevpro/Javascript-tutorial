'use strict';

// Array 
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'bananar'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++ ) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('straw', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('grape', 'mango');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('apricot', 'tomato', 'melon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'water-melon', 'duran');
console.log(fruits);

// combine two arrays
const fruits2 = ['plum', 'pear'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index: indexOf
console.log(fruits);
console.log(fruits.indexOf('mango'));
// includes
console.log(fruits.includes('mango'));

// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('straw');
console.log(fruits);
console.log(fruits.indexOf('straw'));
console.log(fruits.lastIndexOf('straw'));