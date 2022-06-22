const gulp = require ('gulp');
// const calculator = require('./src/calculator');

let a = +process.argv[3];
let b = +process.argv[4];

function add () {
    return console.log(a + b);
};

function sub () {
    return console.log(a - b);
};

function mult () {
    return console.log(a * b);
};

function div () {
    return console.log(a / b);
};



module.exports = {

    add: add(process.argv[3], process.argv[4]),
    sub: sub(process.argv[3], process.argv[4]),
    mult: mult(process.argv[3], process.argv[4]),
    div: div(process.argv[3], process.argv[4]),
}