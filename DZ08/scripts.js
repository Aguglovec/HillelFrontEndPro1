"use strict";

const operand1El = document.getElementById("operand1");
const operand2El = document.getElementById("operand2");
const operatorEl = document.getElementById("operator");
const resultEl = document.getElementById("result");
const errorMsgEl = document.getElementById("error"); 
const calculateBtnEl = document.getElementById("calculateButton");

calculateBtnEl.addEventListener("click", onCalculateBtnClick);
operand1El.addEventListener("input", isNum);
operand2El.addEventListener("input", isNum);

function onCalculateBtnClick() {
    if (isNaN(+operand1El.value) === true || isNaN(+operand2El.value) === true) {
        errorMsgEl.textContent = 'Wrond character is entered. Only 0,1,2,3,4,5,6,7,8,9,"." are allowed!';
    } else {
        switch (operatorEl.value) {
            case '+':
                showResult (` ${+operand1El.value + +operand2El.value}`);
                break;
            case '-':
                showResult (` ${+operand1El.value - +operand2El.value}`);
                break;
            case '*':
                showResult (` ${+operand1El.value * +operand2El.value}`);
                break;
            case '/':
                showResult (` ${+operand1El.value / +operand2El.value}`);
                break;
        }
    }
}

function showResult(result) {
    resultEl.textContent = `= ${result}`;
}

function isNum () {
    if (isNaN(+this.value) === true || this.value === '') {
        errorMsgEl.textContent = 'Wrond character is entered. Only 0,1,2,3,4,5,6,7,8,9,"." are allowed!';
    } else {
        errorMsgEl.textContent = '';
    }
}


