const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

const calculationHistory = [{
    numOne: 2,
    symbol: 'Add',
    numTwo: 2
}];

app.get('/calculate', (req, res) => {
    console.log('Getting /calculate!');

    res.send(calculationHistory);
})

app.post('/calculate', (req, res) => {
    console.log('Posting to /calculate!');

    calculationHistory.push(req.body)

    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})