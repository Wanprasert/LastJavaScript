function getAsciiSum(triplet) {
    return triplet.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function findArithmeticProgression(sums, length) {
    for (let start = 0; start <= sums.length - length; start++) {
        let diff = sums[start + 1] - sums[start];
        let isProgression = true;
        for (let i = 1; i < length; i++) {
            if (sums[start + i] + diff !== sums[start + i + 1]) {
                isProgression = false;
                break;
            }
        }
        if (isProgression) {
            return Array.from({ length: length }, (_, i) => start + i);
        }
    }
    return [];
}

function secretWord(s, length) {
    let triplets = [];
    for (let i = 0; i <= s.length - 3; i++) {
        triplets.push(s.substring(i, i + 3));
    }

    let sums = triplets.map(getAsciiSum);

    const indices = findArithmeticProgression(sums, length - 1);
    if (indices.length) {
        return indices.map(index => triplets[index][1]).join('');
    }
    return '';
}

// Test the function
console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5));  // Should return "brake"
console.log(secretWord("aheiayd", 3));  // Should return "hey"