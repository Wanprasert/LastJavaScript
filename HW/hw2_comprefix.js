const string1 = ["flower", "flow", "flood"];
const string2 = ["racecar", "rare"];
const string3 = ["computer", "computing", "compute", "computation"];

var longestCommonPrefix = function(strs) {
    let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
    for (let str of strs) {
        while (str.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

let res1 = longestCommonPrefix(["flower", "flow", "flood"]);
let res2 = longestCommonPrefix(["racecar", "rare"]);
let res3 = longestCommonPrefix(["computer", "computing", "compute", "computation"]);

console.log("Longest Common Prefix of :flower,flow,flood are:" + " [" + res1 + "]");
console.log("Longest Common Prefix of :racecar,rare are:" + " [" + res2 + "]");
console.log("Longest Common Prefix of :computer,computing,compute,computation are:" + " [" + res3 + "]");
//Longest Common Prefix of :flower,flow,flood are: [flo]
//Longest Common Prefix of :racecar,rare are: [ra] 
//Longest Common Prefix of :comput