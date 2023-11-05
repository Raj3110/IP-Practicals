// Write a program which will demonstrate the buffers in Node js.

// Create a buffer of length 10 filled with 0s
let buffer1 = Buffer.alloc(10);
console.log(buffer1);

// Create a buffer from a string
let buffer2 = Buffer.from('Hello World');
console.log(buffer2.toString());

// Create a buffer from an array
let buffer3 = Buffer.from([1, 2, 3, 4, 5]);
console.log(buffer3);
