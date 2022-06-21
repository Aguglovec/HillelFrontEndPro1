const gulp = require ('gulp');
// const calculator = require('./src/calculator');
const args = [];

function add () {
    return console.log(Number(process.argv[3])+Number(process.argv[4]));
    // let result =  rest.reduce ((acc,val1) => {return acc+=val1}, result);
    // return console.log(result)
};

function sub (...rest) {
    let result =  rest.reduce ((acc,val1) => {return acc-=val1}, result);
    return console.log(result) 
};

function mult (...rest) {
    let result = rest.reduce ((acc,val1) => {return acc*=val1}, result);
    return console.log(result) 
};

function div (...rest) {
    let result =  rest.reduce ((acc,val1) => {return acc/=val1}, result);
    return console.log(result) 
};



module.exports = {
    default : console.log(Number(process.argv[3])+Number(process.argv[4])),
    add: add,
    sub: sub,
    mult: mult,
    div: div,
}