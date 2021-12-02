'use strict';

//85
// разделить массив на н подмассивов

// первый варик, работает как надо, не несовершенен, написан мною
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const anotherarray = (array, n) => {
  let pos = Math.round(array.length/n)
  if (pos == array.length) return [array];
  if (n > array.length) throw new Error("n is too big");
  const res = [array.slice(0, pos), ...anotherarray(array.slice(pos, array.length), n-1)];
  return res;
};


console.log(anotherarray(array1, 4));


//второй варик, улучшенный, написан батей
const anotherArray1 = (array, n) => {
  if (n <= 0) n = 1;
  if (n > array.length) n = array.length;
  //тут отличие (старая строка в комментах)
  //идея - взять для каждого куска столько элементов, сколько возможно
  //так куски с бОльшим числом элементов будут всегда идти раньше кусков с меньшим числом элементов
  //в старом коде это было хаотично
  let pos = Math.trunc(array.length / n) + Math.sign(array.length % n);
  //let pos = Math.round(array.length / n)

  //просто покороче
  return (pos == array.length) ? [array] : [array.slice(0, pos), ...anotherArray1(array.slice(pos), n-1)];
};

const source = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

//приятный глазу вывод
let output = '';
let result = anotherArray1(source, 6);

for (let i of result) {
 output += (output && ' >>> ') + i.join(',')
}

console.log(output);
