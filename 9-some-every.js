'use strict';

//85
// реализовать методы сам и эвери

const some = (array, callback) => {
    for (const element of array) {
        if (callback(array[element])) {
            return true;
        } 
    }
};

const every = (array, callback) => {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            arr.push(array[i]);
        } 
    }
    return (arr.length == array.length) ? true : false;
};

const isEven = (a) => {
    if (a % 2 == 0) return a;
};

console.log(some([1, 4, 8, 8], isEven));
console.log(every([1, 4, 8, 8], isEven));