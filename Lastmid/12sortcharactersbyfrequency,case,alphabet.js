function frequencySort(s) {
    let charMap = {};

    // Create a frequency map
    for (let char of s) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    // Sort the characters by frequency
    let sortedChars = Object.keys(charMap).sort((a, b) => {
        return charMap[b] - charMap[a] || s.indexOf(a) - s.indexOf(b);
    });

    // Build the sorted string
    let result = '';
    for (let char of sortedChars) {
        result += char.repeat(charMap[char]);
    }

    return result;
}

console.log(frequencySort("tree"));    // "eert"
console.log(frequencySort("cccaaa"));  // "aaaccc"
console.log(frequencySort("Aabb"));    // "bbAa"
