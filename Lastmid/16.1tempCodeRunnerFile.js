
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
