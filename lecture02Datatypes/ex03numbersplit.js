function numberSplit(n) {
    let x = Math.ceil(n / 2);
    let y = Math.floor(n / 2);
    const j= ",";
    return y+j+x;
   }
   console.log(numberSplit(4)); //[2, 2]
   console.log(numberSplit(10)); //[5, 5]
   console.log(numberSplit(11)); //[5, 6]
   console.log(numberSplit(-9)); //[-5, -4]