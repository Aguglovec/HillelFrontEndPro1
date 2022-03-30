function getNumber(operandName) {
    let number = prompt(`Please enter a ${operandName}`);
    while (isNaN(number) === true || (number === '')) {
        number = prompt(`Please enter a valid ${operandName}, only 0, 1, 2, 3, 4, 5, 6, 7, 8, 9  allowed`);
    }
    return +number
}

function getOperator(operatorName) {
    let operatorEntered = prompt(`Hello! Please enter an ${operatorName}, available options: + - * /`);
    while (operatorEntered !== ('+' || '-' || '*' || '/')) {
        operatorEntered = prompt(`Please enter a valid ${operatorName}, only  + - * /  allowed`);
    }
    return operatorEntered
}


const operator = getOperator('arithmetic operator');
const a = getNumber('first operand');
const b = getNumber('second operand'); 
let result;

switch (operator) {

// + Addition
    case '+':
    result = a + b;
    break;

// - Subtraction   
    case '-': 
    result = a - b;
    break;

// * Multiplication   
    case '*':
    result = a * b;
    break;

// / Division
    case '/':
    // Now it will check if divider is 0 and ask to enter it again.
    while (b===0) {
        alert('It is forbidden to divide by 0! Enter any other number except 0.');
        b = getNumber('second operand');
    }
    result = a / b;
    break;
}

// Result return
alert(`The result is : ${a} ${operator} ${b} = ${result}`);