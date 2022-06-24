export default function interpolate(template, obj) {
    for (let key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }

    return template;
}

    //Переписал функцию interpolate, добавил рекурсию, чтобы она перебирала объекты на всю глубину.
    // Плюс - масштабируемость. Достаточно добавить новые свойства только в шаблон, и не надо переписывать код.
    // Минус - все свойства должны иметь уникальные имена иначе будет записано первое, которое попадётся.
export function interpolateDeeper(template, obj) {
    for (let key in obj) {

        if (typeof (obj[key]) !== "object") {
            template = template.replaceAll(`{{${key}}}`, obj[key]);
            

        } else if (Array.isArray(obj[key])) {
            obj[key].map ((elem) => { template = interpolateDeeper(template,elem)});
            
        } else {
            template = interpolateDeeper(template, obj[key]);
            
        }
    }

    return template;
}


function copyObj(object) {
    if (typeof (object) !== "object" || object === null) {
        return object;

    } else if (Array.isArray(object)) {
        return object.map ((elem) => copy(elem));
        
    } else {
        const newObj = {};
        for (const key in object) {
            newObj[key] = copy(object[key]);
        }
        return newObj;
    }
}    


function debounce(fn, timeout = 500) {
    let timerId = null;
    return (...rest) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...rest), timeout);
    };
}