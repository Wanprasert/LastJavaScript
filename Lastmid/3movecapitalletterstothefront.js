/*
capToFront("hApPy") -> "APhpy"
capToFront("moveMENT") -> "MENTmove"
capToFront("shOrtCAKE") -> "OCAKEshrt"
*/

function capToFront(s) {
    let upper = "";
    let lower = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            upper += s[i];
        } else {
            lower += s[i];
        }
    }
    return upper + lower;
}
console.log(capToFront("hApPy")); // "APhpy"
console.log(capToFront("moveMENT")); // "MENTmove"
console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"