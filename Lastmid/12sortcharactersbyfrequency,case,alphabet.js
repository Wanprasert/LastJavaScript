function frequencySort(data) {

    let result = "";
    for (let index = data.length - 1 ; index >= 0 ; index--) result += data[index];
    
    return (result);
}

console.log(frequencySort('tree'));
console.log(frequencySort('cccaaa'));
console.log(frequencySort('Aabb'));