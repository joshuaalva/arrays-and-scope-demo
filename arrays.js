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
console.log(names[0]); // returns Joshua

names[0] = 'Deika'; // replaces Joshua with Deika
console.log(names);

// number in between the bracket is called the index. the index of an array
// the index refers to the position of different elements in the array

// getting the last element of an array

console.log(names.length); // returns 3 
// length -1 will give you the correct index for the last element
console.log(names[names.length-1]); // returns Mike