function tuckIn(arr1, arr2){
    let first = arr1.length/2
    const c= ","
    return arr1.slice(0,first) +c+ arr2 +c+ arr1.slice(first)
}

console.log(tuckIn([1,10], [2, 3, 4, 5, 6, 7, 8, 9])); //=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15, 150], [45, 75, 35])); //=[15, 45, 75, 35, 150]
console.log(tuckIn([5, 15, 150, 170], [45, 75, 35])); //=[5, 15, 45, 75, 35, 170]

/*function tuckIn(arr1, arr2) {

    let first = arr1[0];
    let last = arr1[arr1.length - 1];
    let middle = arr1.slice(1,arr1.length - 1);
    
    return [first].concat(middle).concat(arr2).concat([last]);
}*/