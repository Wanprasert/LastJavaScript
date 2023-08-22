/*
removeDups([1, 0, 1, 0]); -> [1, 0]
removeDups(["The", "big", "cat"]); -> ["The", "big", "cat"]
removeDups(["John", "Taylor", "John"]); -> ["John", "Taylor"]
*/

function removeDups(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
 console.log(removeDups([1, 0, 1, 0])); // [1, 0]
 console.log(removeDups(["The", "big", "cat"])); // ["The", "big", "cat"]
 console.log(removeDups(["John", "Taylor", "John"])); // ["John", "Taylor"]
