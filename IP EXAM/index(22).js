// 22. Write a program to display “Hello World” using Express JS.

//npm i express cors
const app = require('express')();
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});