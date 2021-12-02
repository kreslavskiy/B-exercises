'use strict';

//85
// вывести рандомный элемент массива

const randomElement = (array) => array[Math.floor(Math.random()*array.length)];

const arr = [1, 2, 4, 4, 3];
console.log(randomElement(arr));