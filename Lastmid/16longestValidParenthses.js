/*
longestValidParentheses("(()") -> 2
// Longest valid parentheses substring is "()"

longestValidParentheses(")()())") -> 4
// Longest valid parentheses substring is "()()"

longestValidParentheses("()))))(()())(") -> 6
*/

function longestValidParentheses(s) {
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