function maxProductExplanation(n) {
    if (n <= 2) {
        return n - 1;
    }

    let product = 1;

    while (n > 4) {
        product *= 3;
        n -= 3;
    }

    return product * n;
}

// Example usage
console.log(maxProductExplanation(2));  // Output: 1
console.log(maxProductExplanation(5));  // Output: 6
console.log(maxProductExplanation(7));  // Output: 12
console.log(maxProductExplanation(10)); // Output: 36
console.log(maxProductExplanation(15)); // Output: 243
