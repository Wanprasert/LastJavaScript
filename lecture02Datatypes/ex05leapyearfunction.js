function leapYear(x) {
if (x % 4 ==0) {
    return true;
    }
    else  {
        return false;
    }
    
}
console.log(leapYear(1990)) //false
console.log(leapYear(1924)) //true
console.log(leapYear(2021)) //false

console.log(leapYear(2020)) //false
console.log(leapYear(2000)) //false