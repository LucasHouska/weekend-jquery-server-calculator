const express = require('express');
const bodyParser = require('body-parser');

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

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})