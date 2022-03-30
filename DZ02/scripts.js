function getNumber(operandName) {
    let number = +prompt(`Please enter a ${operandName}`);
        //Пробовал isNaN:
    //Оба следующих варианта выдают ошибку "Uncaught ReferenceError: Invalid left-hand side in assignment" Что я делаю не так?
    // while (isNaN(number) == true) {
    while (Number.isNaN(number) == true) {
    // while (number !== number) {
    number = +prompt(`Please enter a valid ${operandName}`, 'only 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 are allowed');
    }
    return number
}

let operation = prompt('Hello! Please enter an arithmetic operation', 'available options: + - * /');
let a = getNumber('first operand');
let b = getNumber('second operand'); 

switch (operation) {

// + Addition
    case '+':
    alert(`The result is : ${a} + ${b} = ${a+b}`);        
    break;

// - Subtraction   
    case '-':
    alert(`The result is : ${a} - ${b} = ${a-b}`);
    break;

// * Multiplication   
    case '*':
    alert(`The result is : ${a} * ${b} = ${a*b}`);
    break;

// / Division
    case '/':
    while (b===0) {
        alert('It is forbidden to divide by 0! Enter any other number except 0.');
        b = getNumber('second operand');
    }
    alert(`The result is : ${a} / ${b} = ${a/b}`);
    break;

// Wrong operation
    default:
    alert(`Something went wrong. Reload the page.`);
    break;
}