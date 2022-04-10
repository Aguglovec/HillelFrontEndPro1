"use strict";

const obj = {
    name: 'Alex', 
    age: 33, 
    address: { country: 'UA', city: 'Dnipro'},
    test: null,
    marks: [9,6,4,10], // Добавил массив чтобы проверить на правильность обработки массивав
} 

const objCopy = copy(obj);

function copy(object) {
    const newObj = {};
    for (const key in object) {
        if (typeof (object[key]) !== "object" || object[key] === null) {
            console.log(key, object[key]);
            newObj[key] = object[key];
            
        } else if (Array.isArray (object[key])) {
            newObj[key] = [...object[key]];

        } else {
            newObj[key] = copy(object[key]);
        }
    }
    return newObj;
}
