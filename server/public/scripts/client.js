$(readyNow);

function readyNow() {
    $('#equals').on('click', handleEquals)
}

function handleEquals() {
    let numOne = $('#firstInput').val();
    let numTwo = $('#secondInput').val();
    let symbol = '';

    let objectToCalculate = {
        numOne: numOne,
        symbol: '',
        numTwo: numTwo
    }
}