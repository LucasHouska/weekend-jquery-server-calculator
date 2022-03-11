$(readyNow);

function readyNow() {
    $('#equals').on('click', handleEquals);
    $('#add').on('click', handleAdd);
    $('#subtract').on('click', handleSubtract);
    $('#multiply').on('click', handleMultiply);
    $('#divide').on('click', handleDivide);
}

    let numOne = $('#firstInput').val();
    let numTwo = $('#secondInput').val();
    let symbol = '';

function handleEquals() {
    let objectToCalculate = {
        numOne: numOne,
        symbol: '',
        numTwo: numTwo
    }
}

function handleAdd() {
    symbol = 'add';
}

function handleDivide() {
    symbol = 'divide';
}

function handleMultiply() {
    symbol = 'multiply';
}

function handleSubtract() {
    symbol = 'subtract'
}