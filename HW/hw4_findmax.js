function maxProductExplanation(n) {

    let x = 1;
    let y = n;
    let z = [];
  
    if (n <= 1) {
      z.push(n);
    } else {
      while (n > 5) {
        z.push(3);
        n -= 3;
      }
  
      if (n === 4) {
        z.unshift(2, 2);
      } else if (n === 5) {
        z.unshift(2, 3);
      } else if (n === 3) {
        z.unshift(3);
      } else if (n === 2) {
        z.unshift(1, 1);
      } else {
        let ex = Math.floor(n / 2);
        let pla = n % 2;
        for (let i = 0; i < ex; i++) {
          z.unshift(2);
        }
        for (let i = 0; i < pla; i++) {
          z.unshift(3);
        }
      }
  
      x = z.reduce((acc, num) => acc * num, 1);
      return `Input: n = ${y}\nOutput: ${x}\nExplanation: ${y} = ${z.join(
        " + "
      )}, ${z.join(" × ")} = ${x}`;
    }
}


// Example usage
console.log(maxProductExplanation(2));  // Output: 1
console.log(maxProductExplanation(5));  // Output: 6
console.log(maxProductExplanation(7));  // Output: 12
console.log(maxProductExplanation(10)); // Output: 36
console.log(maxProductExplanation(15)); // Output: 243
