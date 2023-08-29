function frequencySort(data) {

    let result = "";
    for (let index = data.length - 1 ; index >= 0 ; index--) result += data[index];
    
    return (result);
}

console.log(frequencySort('tree')); //eert
console.log(frequencySort('cccaaa')); //aaaccc
console.log(frequencySort('Aabb')); //bbaA