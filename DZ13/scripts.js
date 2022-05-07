"use strict";


// Проводит несколько вычислений подряд и принимает сразу несколько аргументов за раз
// Может сделать вот так:
// console.log(calc.sum(100,100).sum(50).sub(100).div(7).mult(3,2).result)


function Calculator(val) {
    this.result = val;
}

Calculator.prototype.sum = function(...rest) {
    this.result =  rest.reduce ((acc,val1) => {return acc+=val1}, this.result);
    return this
};

Calculator.prototype.sub = function(...rest) {
    this.result =  rest.reduce ((acc,val1) => {return acc-=val1}, this.result);
    return this 
};

Calculator.prototype.mult = function(...rest) {
    this.result = rest.reduce ((acc,val1) => {return acc*=val1}, this.result);
    return this 
};

Calculator.prototype.div = function(...rest) {
    this.result =  rest.reduce ((acc,val1) => {return acc/=val1}, this.result);
    return this 
};

Calculator.prototype.set = function(val) {
    this.result = val;
    return this 
};


const calc = new Calculator(10);


// Простой вариант:
// const calc = new createCalculator(10);

// function createCalculator(base) {
//     this.result = base;
//     this.sum = (b) => this.result += b;
//     this.sub = (b) => this.result -= b;
//     this.mult = (b) => this.result *= b;
//     this.div = (b) => this.result /= b;
//     this.set = (b) => this.result = b;
// }

calc.sum(5); /// 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11

// calc.result // 11