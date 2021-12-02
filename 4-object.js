'use strict';

//85
// вывести те поля объекта, которые являются ф-циями

const obj1 = {
    1: 'loh',
    2: (a, b) => a+b,
    3: function Loh (a) {return Math.pow(a, 4)},
    4: 456,
    5: [1, 2, 3, 4]
};

const findFuncInObject = (object) => {
    const arr = [];
    for (const key in object) {
        if (typeof object[key] == 'function') {
            arr.push(key);
        }
    }
    return arr;
};

console.log(findFuncInObject(obj1));