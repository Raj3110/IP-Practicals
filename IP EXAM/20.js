// Write a program which demonstrates asynchronous programming using Node.js 

// test.txt
//  npm i fs
const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {return console.log(err)}
    console.log(data);
});

console.log('Reading file...');