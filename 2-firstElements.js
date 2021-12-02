'use strict';

//85
// вывести первые н элементов массива

const firstElements = (array, n) => {
    const arr = [];
for (let i = 0; i < n; i++) {
        arr.push(array[i]);
    }
    return arr;
};

const arr1 = [1, 2, 2, 3, 4, 5, 6, 4, 5, 6];
console.log(firstElements(arr1, 6));