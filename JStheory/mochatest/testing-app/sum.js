function sum(a, b) {
  return a + b;
}

// Экспортируем функцию sum.
// Чтобы импортировать нужно использовать require();
// module.exports = sum;


// Экспортируем другую функцию
function sum(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }

  return arr;
}

console.log(sum([1, 2, 3]));
// module.exports = sumArray;
