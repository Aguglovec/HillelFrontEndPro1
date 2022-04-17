"use strict";

const operand1Input = document.getElementById("operand1");
const operand2Input = document.getElementById("operand2");
const operatorInput = document.getElementById("operator");
const resultEl = document.getElementById("result");
const errorMsgEl = document.getElementById("error"); 
const calculateBtnEl = document.getElementById("calculateButton");

calculateBtnEl.addEventListener("click", onCalculateBtnClick);
operand1Input.addEventListener("input", isValid);
operand2Input.addEventListener("input", isValid);

function onCalculateBtnClick() {
    if (isValid()) {   
        switch (operatorInput.value) {
            case '+':
                showResult (` ${+operand1Input.value + +operand2Input.value}`);
                break;
            case '-':
                showResult (` ${+operand1Input.value - +operand2Input.value}`);
                break;
            case '*':
                showResult (` ${+operand1Input.value * +operand2Input.value}`);
                break;
            case '/':
                showResult (` ${+operand1Input.value / +operand2Input.value}`);
                break;
        }
    }
}

function showResult(result) {
    resultEl.textContent = `= ${result}`;
}

function isValid () {
    // Сделал общий обработчик чтобы не возникал глюк, когда стиралась ошибка при вводе правильного операнда после неправильного 
    if (isNaN(operand1Input.value) || isNaN(operand2Input.value))  {
        errorMsgEl.textContent = 'Wrond character is entered. Only 0,1,2,3,4,5,6,7,8,9,"." are allowed!';
        return false;
    } else {
        errorMsgEl.textContent = '';
        return true;
    }
}


// function isValid () {
//     if (isNumber(operand1Input.value) && isNumber(operand2Input.value)) {
//         return true
//     }
// }

// function isNumber(val) {
//     if (!isNaN(val))  {
//         // errorMsgEl.textContent = '';
//         return true;
//     } else {
//         errorMsgEl.textContent = 'Wrond character is entered. Only 0,1,2,3,4,5,6,7,8,9,"." are allowed!';
//         // return false;
//     }
// }
