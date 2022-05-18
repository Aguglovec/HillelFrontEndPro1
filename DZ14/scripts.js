"use strict";

// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (50 тугриков, 20 калорий)
// средний (75 тугриковб 30 каллорий)
// большой (100 тугриков, 40 калорий)


// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).

// const SIZE_SMALL = {
//     _price: 50,
//     _callories: 20,
// }

// const SIZE_REGULAR = {
//     _price: 75,
//     _callories: 30,
// }

// const SIZE_LARGE = {
//     _price: 100,
//     _callories: 40,
// }

const TOPPING_CHEESE = {
    _price: 20,
    _callories: 5,
}

const TOPPING_POTATO = {
    _price: 15,
    _callories: 10,
}

const TOPPING_SALAD = {
    _price: 20,
    _callories: 5,
}

const TOPPING_SPICES = {
    _price: 15,
    _callories: 0,
}

const TOPPING_MAYO = {
    _price: 20,
    _callories: 5,
}

class Hamburger {
    constructor(size) {
        this._price = Hamburger[size]._price;
        this._callories = Hamburger[size]._callories;
    }

    static SIZE_SMALL= {
        _price: 50,
        _callories: 20,
    };
    
    static SIZE_REGULAR= {
        _price: 75,
        _callories: 30,
    };
    
    static SIZE_LARGE= {
        _price: 100,
        _callories: 40,
    };


    get price () {
        return this._price;
    }

    get callories() {
        return this._callories;
    }

    getPrice () {
        return this._price;
    }

    getCallories() {
        return this._callories;
    }

    addTopping(toppingObj) {
        for (let key in toppingObj) {
            this[key] += toppingObj[key];
        }
    }

    removeTopping (toppingObj) {
        for (let key in toppingObj) {
            this[key] -= toppingObj[key];
        }
    }
}

const hamburger = new Hamburger('SIZE_SMALL');
// добавка из майонеза
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());
