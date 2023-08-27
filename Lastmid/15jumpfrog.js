/*jumpingFrog(5, [1, 1, 1, 1, 1]) -> 6
jumpingFrog(5, [1, 3, 1, 1, 1]) -> 4
jumpingFrog(5, [1, 1, 0, 1, 1]) -> "no chane :-("
*/

function jumpingFrog(n, stones) {
    let position = 0;
    let jumps = 0;

    for (let i = 0; i < n; i++) {
        if (stones[i] === 0) {
            if (i === n - 1 || stones[i + 1] === 0) {
                return "no chance :-(";
            } else {
                jumps++;
                i++;  // Jump over the next stone as well
            }
        } else if (stones[i] === 3) {
            return "no chance :-(";
        } else {
            jumps++;
        }
    }

    return jumps;
}

console.log(jumpingFrog(5, [1, 1, 1, 1, 1]));  // 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1]));  // "no chance :-("
console.log(jumpingFrog(5, [1, 1, 0, 1, 1]));  // 4
