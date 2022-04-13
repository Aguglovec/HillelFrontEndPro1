"use strict";

let createCalculator = function(val) {
    return { 
        sum(...rest) {
            val =  rest.reduce ((acc,val1) => {return acc+=val1}, val);
            return val
        },
        
        sub(...rest) {
            val =  rest.reduce ((acc,val1) => {return acc-=val1}, val);
            return val
        },
        
        mult(...rest) {
            val = rest.reduce ((acc,val1) => {return acc*=val1}, val);
            return val
        },
        
        div(...rest) {
            val =  rest.reduce ((acc,val1) => {return acc/=val1}, val);
            return val
        },
        
        set(b) {
            return val = b;
        },

        get() {
            return val;
        }
    }
}

const calc = createCalculator(10);

console.log(calc.sum(5)); // 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100