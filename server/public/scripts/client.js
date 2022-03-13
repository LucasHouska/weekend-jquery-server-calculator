$(readyNow);

let count = 0;
let numOne = 0;
let numTwo = 0;
let symbol = '';

function readyNow() {
    $('.equals').on('click', handleEquals);
    $('.clear').on('click', handleClear);
    $('#add').on('click', handleAdd);
    $('#subtract').on('click', handleSubtract);
    $('#multiply').on('click', handleMultiply);
    $('#divide').on('click', handleDivide);
    $('.buttons').on('click', handleInput)
}    

function handleInput() {
    $('#input').val($('#input').val() + $(this).text())

    $('.symbol').on('click', function(){
        $('.symbol').off('click');   
    })
}

function handleEquals() {
    numOne = $('#firstInput').val();
    numTwo = $('#secondInput').val();
    console.log(numOne, 'by', numTwo);
    if(numOne === '' || numTwo === ''){
        alert('Please insert a number')
    } else {
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
    }).catch(function(error){
        console.log(error);
        alert('error! error!')
    })
}
}

function handleClear() {
    $('#firstInput').val('');
    $('#secondInput').val('');
    $('#input').val('');
    symbol = '';
    console.log('Cleared!')
    
    $('.buttons').on('click', handleInput)
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
        $('#calculations').append(`<p>${calc.numOne} ${calc.symbol} ${calc.numTwo} = ${calc.result}</p>`)
    }
}

function handleAdd() {
    console.log('Adding...')
    symbol = '+';
}

function handleDivide() {
    console.log('Dividing...');
    
    symbol = '/';
}

function handleMultiply() {
    console.log('Multiplying...');
    
    symbol = '*';
}

function handleSubtract() {
    console.log('Subtracting...');
    
    symbol = '-'
}