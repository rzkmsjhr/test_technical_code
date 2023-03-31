const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const { maxHeaderSize } = require('http');

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }))

//Route
app.get('/', (req, res) => {
    res.render('form');
});

app.post('/', (req, res) => {
    const input = req.body.input;
    const result = generateTriangle(input);
    res.send(result);
});

function generateTriangle(input) {
    let triangle = "";
    let zero = "";
    for (let i = 0; i < input.length; i++) {
        const digit = parseInt(input.charAt(i));
        zero += "0";
        triangle += digit + zero + "<br>";
    }
    return triangle;
}

app.post('/oddnumber', (req, res) => {
    const number = parseInt(req.body.number);
    let oddNumbers = [];
    const start = (number % 2 === 0) ? 1 : 2;

    for (let i = start; i <= number; i += 2) {
        oddNumbers.push(i);
    }
    res.json(oddNumbers);
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
})