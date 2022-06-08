const add = require('./calcAdd');
const sub = require('./calcSub');
const mult = require('./calcMult');
const div = require('./calcDiv');
const set = require('./calcSet');
const res = require('./calcRes');

let result = 0;

module.exports = {
    add: add,
    sub: sub,
    mult: mult,
    div: div,
    set: set,
    result: res,
}