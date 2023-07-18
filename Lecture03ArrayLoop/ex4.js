function numbersSum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  

  console.log(numbersSum([1, 2, "13", "4", "645"])); // 3
  console.log(numbersSum([true, false, "123", "75"])); // 0
  console.log(numbersSum([1, 2, 3, 4, 5, true])); // 15  