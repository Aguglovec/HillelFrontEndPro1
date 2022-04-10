"use strict";

const obj = {
    name: 'Alex', 
    age: 33, 
    address: { country: 'UA', city: 'Dnipro'},
    test: null,
    marks: [9,6,4,10,[5,3,1], { country: 'UA', city: 'Dnipro'}], // Добавил чтобы проверить на правильность обработки массивов
} 

const objCopy = copy(obj);

// Первый вариант, который не проверяет, что в массиве:
// function copy(object) {
//     const newObj = {};
//     for (const key in object) {
//         if (typeof (object[key]) !== "object" || object[key] === null) {
//             console.log(key, object[key]);
//             newObj[key] = object[key];
            
//         } else if (Array.isArray (object[key])) {
//             newObj[key] = [...object[key]];

//         } else {
//             newObj[key] = copy(object[key]);
//         }
//     }
//     return newObj;
// }


// Второй вариант, который проверяет, что в массиве:
function copy(object) {
    if (typeof (object) !== "object" || object === null) {
        return object;

    } else if (Array.isArray(object)) {
        return object.map ((item) => copy(item));
        
    } else {
        const newObj = {};
        for (const key in object) {
            newObj[key] = copy(object[key]);
        }
        return newObj;
    }
}    
