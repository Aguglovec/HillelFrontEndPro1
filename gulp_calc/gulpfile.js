const gulp = require ('gulp');

function add (a,b) {
    return console.log(a + b);
};

function sub (a,b) {
    return console.log(a - b);
};

function mult (a,b) {
    return console.log(a * b);
};

function div (a,b) {
    return console.log(a / b);
};



module.exports = {
    add: add(+process.argv[3], +process.argv[4]),
    sub: sub(+process.argv[3], +process.argv[4]),
    mult: mult(+process.argv[3], +process.argv[4]),
    div: div(+process.argv[3], +process.argv[4]),
}