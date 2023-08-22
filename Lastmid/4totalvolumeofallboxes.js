/*
totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) -> 63
totalVolume([2, 2, 2], [2, 1, 1]) -> 10
totalVolume([1, 1, 1]) -> 1
*/

function totalVolume(...boxes) {
    return boxes.reduce((total, box) => {
      return total + box[0] * box[1] * box[2];
    }, 0);
  }
  
  console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // 63
  console.log(totalVolume([2, 2, 2], [2, 1, 1])); // 10
  console.log(totalVolume([1, 1, 1])); // 1
  