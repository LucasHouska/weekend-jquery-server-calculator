$(readyNow);

let count = 0;
let numOne = 0;
let numTwo = 0;
let symbol = '';

function readyNow() {
    $('#equals').on('click', handleEquals);
    $('#add').on('click', handleAdd);
    $('#subtract').on('click', handleSubtract);
    $('#multiply').on('click', handleMultiply);
    $('#divide').on('click', handleDivide);
}
    

function handleEquals() {
    count++;
    numOne = $('#firstInput').val();
    numTwo = $('#secondInput').val();
    console.log(numOne, 'by', numTwo);
    let objectToCalculate = {
        count: count,
        numOne: numOne,
        symbol: symbol,
        numTwo: numTwo,
        result: 0
    }

    $.ajax({
        url: '/calculate',
        method: 'POST',
        data: objectToCalculate
    }).then(function(response) {
        console.log(response);
        getCalculation();
    })
}

function getCalculation() {
    console.log('Getting calculation...');
    
    $.ajax({
        url: '/calculate',
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        render(response);
    }).catch(function(error) {
        console.log(error);
        alert('error in GET');
    })
}

function render(calculations) {
    $('#calculations').text('');

    for (const calc of calculations) {
        $('#calculations').append(`<p>${calc.result}</p>`)
    }
}

function handleAdd() {
    console.log('Adding...')
    symbol = 'add';
}

function handleDivide() {
    console.log('Dividing...');
    
    symbol = 'divide';
}

function handleMultiply() {
    console.log('Multiplying...');
    
    symbol = 'multiply';
}

function handleSubtract() {
    console.log('Subtracting...');
    
    symbol = 'subtract'
}