function countPosSumNeg(array) {
    if(array.length === 0) {
        return [];
    }

    let x = array.reduce(function(num1, num2) {
        if(num2 > 0) {
            num1[0] += 1;
        } else if(num2 < 0) {
            num1[1] += num2;
        }
        return num1;
    }, [0, 0]);

    return x;
}

console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); //[10, -65]
// There are a total of 10 positive numbers.
// The sum of all negative numbers equals -65.
console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])); //[7, -252]
console.log(countPosSumNeg([91, -4, 80, -73, -28])); //[2, -105]
console.log(countPosSumNeg([])); //[]
