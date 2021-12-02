'use strict';

//85
// реализовать метод мап

const map = (array, callback) => {
    const arr = [];
    for (const element of array) {
        arr.push(callback(element));
    }
    return arr;
};

console.log(map([1, 2, 3], (a) => a*2));