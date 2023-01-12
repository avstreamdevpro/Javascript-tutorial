// 1. Use strict

'use strict';

// 2. Variable, rw(read adn write)

let globalName = 'global name';
{
    let name = 'mingxing';
    console.log(name);
    name = 'dangdang';
    console.log(name);
}

console.log(globalName);

// var (don't ever use this!)
// var hositing (move declaration from bottom to top)
// has no block scope
console.log(age);
age = 4;
console.log(age);
var age;

// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;
//Note!
// Immutable data types: premitive types, frozen objects (i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor inmmutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: Number, string, boolean, null, undefine, Symbol
// Object, box container
// function, first-class function
const count = 20; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt 
const bigInt = 12334134192379321789371295879175n;  // over (-2 *53 ~ 2 *53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'C';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;  // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // let x = undefined;

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing; dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '6' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

// object, real-life object, data structure
const me = { name: 'MingXing', age: 20};
me.age = 30;