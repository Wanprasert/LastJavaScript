function maxProductExplanation(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    if (n === 4) return 4;

    let product = 1;
    while (n > 4) {
        product *= 3;
        n -= 3;
    }
    
    // Multiply with the remaining value of n which will be either 2, 3 or 4.
    product *= n;

    return product;
}

console.log(maxProductExplanation(2)); // 1
console.log(maxProductExplanation(5)); // 6
console.log(maxProductExplanation(7)); // 12
console.log(maxProductExplanation(10)); // 36
console.log(maxProductExplanation(15)); // 243
