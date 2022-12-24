// Arrays 

let names = ['Joshua', 'Liz', 'Mike'];
console.log(names);
console.log(typeof names); // returns object ??
// an array is actually an object of the type array 
// object means a few different things 

// Array.isArray (a method to check if a variable is an array)

console.log(Array.isArray(names)); // returns true
console.log(Array.isArray('testing')); //returns false

// bracket access
// numbers start at 0, 0 indexed 
// console.log(names[0]); // returns Joshua

// names[0] = 'Deika'; // replaces Joshua with Deika
// console.log(names);

// number in between the bracket is called the index. the index of an array
// the index refers to the position of different elements in the array

// getting the last element of an array

// console.log(names.length); // returns 3 
// length -1 will give you the correct index for the last element
// console.log(names[names.length-1]); // returns Mike

// .push method: add something to the end of an array
names.push('Lizzie');
// console.log(names);

// .popo method: allows you to remove and return the most recently added elemenet to the array
// let latestAdd = names.pop();
// console.log(latestAdd); // prints out Lizzie 
// console.log(names); // prints out deika liz mike no lizzie because of pop method 

// .shift method: similar to .pop but it's the first element
// console.log(names); // joshua liz mike lizzie
// let firstElementRemoved = names.shift(); 
// console.log(firstElementRemoved); // returns joshua
// console.log(names); // returns liz mike lizzie

// .unshift method: 
// console.log(names);
names.unshift('Scott'); // add scott to the beginning of names unshift
// console.log(names);

// .indexOf is an array method
// console.log(names.indexOf('Scott')); // the location of index of where it was found [0];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names.indexOf('Keyla')); // returns -1

// .slice: it extracts a portion of an array 

console.log(names); // scott, joshua, liz, mike, lizzie
console.log(names.slice(0,1)); // index 0 starts and makes the cut at 1 index //
console.log(names.slice(0,2)); // returns scott joshua
console.log(names.slice(1,2)); // returns joshua

// includes method
console.log(names.includes('Joshua')); // true
console.log(names.includes('Edgardo')); // false

// reverse method: reverses in place does not returns but reverses the array
console.log(names);
names.reverse();
console.log(names);

// MDN array documentation. 



