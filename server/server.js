const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));


const calculationHistory = [];


function calculate(inputs) {
    if(inputs.symbol === '+'){
        console.log(Number(inputs.numOne) + Number(inputs.numTwo));
        inputs.result = Number(inputs.numOne) + Number(inputs.numTwo)
    } else if(inputs.symbol ==='-'){
        console.log(Number(inputs.numOne) - Number(inputs.numTwo));
        inputs.result = Number(inputs.numOne) - Number(inputs.numTwo)
    } else if(inputs.symbol === '*'){
        console.log(Number(inputs.numOne) * Number(inputs.numTwo));
        inputs.result = Number(inputs.numOne) * Number(inputs.numTwo)
    } else if(inputs.symbol === '/'){
        console.log(Number(inputs.numOne) / Number(inputs.numTwo));
        inputs.result = Number(inputs.numOne) / Number(inputs.numTwo)
    } else{
        console.log('I don\'t know how you broke this, but you did')
    }
}

app.get('/calculate', (req, res) => {
    console.log('Getting /calculate!');

    res.send(calculationHistory);
})

app.post('/calculate', (req, res) => {
    console.log('Posting to /calculate!');

    calculate(req.body);

    calculationHistory.push(req.body);

    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})