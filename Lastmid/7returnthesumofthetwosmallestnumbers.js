/*
sumTwoSmallestNumbers([19, 5, 42, 2, 77]); -> 7
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]); -> 3453455
sumTwoSmallestNumbers([2, 9, 6, -1]); -> 8
sumTwoSmallestNumbers([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]); -> 563
sumTwoSmallestNumbers([3683, 2902, 3951, -475, 1617, -2385]); -> 4519
*/

function sumTwoSmallestNumbers(numbers) {
    let positiveNumbers = numbers.filter(function(num) {
     return num > 0;
    });
    positiveNumbers.sort(function(a, b) {
     return a - b;
    });
     return positiveNumbers[0] + positiveNumbers[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455
console.log(sumTwoSmallestNumbers([2, 9, 6, -1])); // 8
console.log(sumTwoSmallestNumbers([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); // 563
console.log(sumTwoSmallestNumbers([3683, 2902, 3951, -475, 1617, -2385])); // 4519