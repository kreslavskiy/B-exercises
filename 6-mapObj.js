'use strict';

//85
// реализовать метод мап для объекта

const map = (object, callback) => {
    const arr = [];
    for (const element in object) {
        arr.push(callback(object[element]));
    }
    return arr;
};

const obj1 = {
    1: 2,
    2: 45,
    3: 454,
    4: 456,
    5: 450,
};
console.log(map(obj1, (a) => a*2));