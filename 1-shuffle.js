'use strict';

//85
// реализовать шафл массива

const shuffler = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const arr = [1, 2, 3, 4, 576]
console.log(shuffler(arr));