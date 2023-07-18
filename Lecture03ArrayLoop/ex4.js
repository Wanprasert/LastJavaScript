function numbersSum(array) {
    let x = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number" && !isNaN(array[i])) {
        x += array[i];
      }
    }
  
    return x;
  }
  

  console.log(numbersSum([1, 2, "13", "4", "645"])); // 3
  console.log(numbersSum([true, false, "123", "75"])); // 0
  console.log(numbersSum([1, 2, 3, 4, 5, true])); // 15  