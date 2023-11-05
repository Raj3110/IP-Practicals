// Write a program which will perform following file operations in Node js using file system module.
// i)	Create a file
// ii)	Write some paragraph into a file.

// test.txt
// npm i fs
const fs = require('fs');

// Create a file and write some text into it
fs.writeFile('test.txt', 'This is an example paragraph.', (err) => {
  if (err) throw err;
  console.log('The file has been created and the text has been written!');
});
