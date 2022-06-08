const calculator = require('./calculator');

calculator.set(10); //10
calculator.div(5);  //2
calculator.mult(2); //4
calculator.sub(1);  //3
calculator.add(2);  //5
calculator.result();    //5

calculator.set(10);
console.log(calculator.add(2)) // 12
console.log(calculator.sub(5)) // 7
console.log(calculator.mult(4)) // 28
console.log(calculator.div(2)) // 14