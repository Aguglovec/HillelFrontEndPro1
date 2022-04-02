const operator = getOperator('arithmetic operator');
const numberArray = getNumberArr();
let result = getResult(operator,numberArray);
alert(`The result is: ${numberArray.join(` ${operator} `)} = ${result}`) 

function getOperator(operatorName) {
    let operatorEntered;
    do {
        operatorEntered = prompt(`Hello! Please enter ${operatorName}, only  + - * /  allowed`);
    }
    while (isOperatorInvalid(operatorEntered));
    return operatorEntered;
}

function isOperatorInvalid(opCheck) {
    return opCheck !== '+' && opCheck !== '-' && opCheck !== '*' && opCheck !== '/';
}

function getNumberArr() {
    let stringArr;
    do {
        stringArr = prompt('Please enter operands separated by commas. Charecters allowed: 0,1,2,3,4,5,6,7,8,9');
    }
    while(isNotArrayOfNumbers(stringArr));
    return stringArr.split (',');
}

//Сделал проверку на то, что пользователь таки ввёл массив чисел, а не что попало.
function isNotArrayOfNumbers(string) {
    const numbersToCheck = string.split (',');
    for  (i=0; i<numbersToCheck.length; i++) {
        if (isNaN(numbersToCheck[i]) || (numbersToCheck[i] === '')) {
            return true;
        }
    }
    return false;
}

// Могу ли я использовать eval, если я проверил всё, что ввёл пользователь на соответствие моим данными? Это будет безопасно?
function getResult(op,arr) {
    let res=arr[0]
    for (i=1; i<numberArray.length; i++) {
        res = eval(res + op + arr[i]);
    }
    return res;
}

// Если не могу использовать eval:

// function getResult(op,arr) {
//     let res=+arr[0]
//     for (i=1; i<arr.length; i++) {
//         switch (op) {

//             case '+': res = res + +arr[i];
//             break;

//             case '-': res = res - +arr[i];
//             break;

//             case '*': res = res * +arr[i];
//             break;

//             case '/': res = res / +arr[i];
//             break;
//         }
//     }
//     return res;
// }