"use strict";

let createCalculator = function(val) {
    return { 
        sum(b) {
            return val += b;
        },
        
        sub(b) {
            return val -= b;
        },
        
        mult(b) {
            return val *= b;
        },
        
        div(b) {
            return val /= b;
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