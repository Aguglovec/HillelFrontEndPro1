function interpolate(template, obj) {
    for (key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }

    return template;
}

function interpolateDeeper(template, obj) {
    for (key in obj) {
        console.log(key +" "+ typeof (obj[key]));
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