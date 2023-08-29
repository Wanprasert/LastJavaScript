function indexMultiplier(array) {
  let result = 0;

  for (let index = 0; index < array.length; index++) {
    result += array[index] * index;
  }

  return result;
}

console.log(indexMultiplier([1, 2, 3, 4, 5])); // 40
console.log(indexMultiplier([-3, 0, 8, -6])); // -2
console.log('multipier is =' + indexMultiplier([1, 2, 3, 4, 5])); // multipier is =40
