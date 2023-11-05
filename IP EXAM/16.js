// Write a program “Hello World” using http module of Node js. Demonstrate REPL in Node.js

// npm i http
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Server running...');
});
