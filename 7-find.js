'use strict';

//85
// реализовать методы файнд и фильтр

const find = (array, callback) => {
    for (const element of array) {
        if (callback(array[element])) {
            return array[element]
        } 
    }
};

const filter = (array, callback) => {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            arr.push(array[i]);
        } 
    }
    return arr;
};

const isEven = (a) => {
    if (a % 2 == 0) {
        return a;
    }
}

console.log(find([1, 4, 8, 8], isEven));
console.log(filter([1, 4, 8, 8], isEven));