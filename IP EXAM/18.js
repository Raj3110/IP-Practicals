// Write a program which will perform following file operations in Node js using file system module.
// i)	Append some text to an existing file
// ii)	Rename the file.

// test.txt
// npm i fs
const fs = require('fs');

// Append text to an existing file
fs.appendFile('test.txt', ' This is some additional text.', (err) => {
  if (err) throw err;
  console.log('The text has been appended to the file!');

  // Rename the file
  fs.rename('test.txt', 'newExample.txt', (err) => {
    if (err) throw err;
    console.log('The file has been renamed!');
  });
});
