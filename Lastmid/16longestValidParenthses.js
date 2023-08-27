/*
longestValidParentheses("(()") -> 2
// Longest valid parentheses substring is "()"

longestValidParentheses(")()())") -> 4
// Longest valid parentheses substring is "()()"

longestValidParentheses("()))))(()())(") -> 6
*/

/*function longestValidParentheses(s) {
    let left = 0, right = 0, maxLength = 0;

    // Left to right scan
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            maxLength = Math.max(maxLength, 2 * right);
        } else if (right >= left) {
            left = 0;
            right = 0;
        }
    }

    left = 0, right = 0;

    // Right to left scan
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            maxLength = Math.max(maxLength, 2 * left);
        } else if (left >= right) {
            left = 0;
            right = 0;
        }
    }

    return maxLength;
}

console.log(longestValidParentheses("(()"));           // 2
console.log(longestValidParentheses(")()())"));        // 4
console.log(longestValidParentheses("()))))(()())(")); // 6
console.log(longestValidParentheses("")); // 0
*/

function longestValidParentheses(data) {

    let left = 0 , right = 0;
    for (let index = 0 ; index < data.length ; index++) {

        if (data[index] == "(") left++;
        else if (data[index] == ")") right++;
    }

    let result;
    if (left > right) {

        result = data.length % right + left;
    }
    else {

        result = (right - left) * 2;
    }
    
    return result;
}

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("()))))(()())("));
