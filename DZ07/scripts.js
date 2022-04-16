"use strict";

// Вычисляет несколько аргументов
// let createCalculator = function(val) {
//     return { 
//         sum(...rest) {
//             val =  rest.reduce ((acc,val1) => {return acc+=val1}, val);
//             return val
//         },
        
//         sub(...rest) {
//             val =  rest.reduce ((acc,val1) => {return acc-=val1}, val);
//             return val
//         },
        
//         mult(...rest) {
//             val = rest.reduce ((acc,val1) => {return acc*=val1}, val);
//             return val
//         },
        
//         div(...rest) {
//             val =  rest.reduce ((acc,val1) => {return acc/=val1}, val);
//             return val
//         },
        
//         set(b) {
//             return val = b;
//         },

//         get() {
//             return val;
//         }
//     }
}



// Проводит несколько вычислений подряд
let createCalculator = function(value) {
    return { 
        val : value,
        sum(...rest) {
            this.val =  rest.reduce ((acc,val1) => {return acc+=val1}, this.val);
            return this
        },
        
        sub(...rest) {
            this.val =  rest.reduce ((acc,val1) => {return acc-=val1}, this.val);
            return this
        },
        
        mult(...rest) {
            this.val = rest.reduce ((acc,val1) => {return acc*=val1}, this.val);
            return this
        },
        
        div(...rest) {
            this.val =  rest.reduce ((acc,val1) => {return acc/=val1}, this.val);
            return this
        },
        
        set(b) {
            return this.val = b;
        },

        get() {
            return this.val;
        }
    }
}


const calc = createCalculator(10);

console.log(calc.sum(100).sum(50).sub(100).get()); 

// console.log(calc.sum(5)); // 15
// console.log(calc.mult(10)); // 150
// console.log(calc.sub(40)); // 110
// console.log(calc.div(10)); // 11
// console.log(calc.set(100)); // 100