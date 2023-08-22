/*
canMove("Rook", "A8", "H8") -> true
canMove("Bishop", "A7", "G1") -> true
canMove("Queen", "C4", "D6") -> false
*/

function canMove(piece, start, end) {
    let startCol = start.charCodeAt(0) - 'A'.charCodeAt(0);
    let startRow = parseInt(start[1]) - 1;
    let endCol = end.charCodeAt(0) - 'A'.charCodeAt(0);
    let endRow = parseInt(end[1]) - 1;

    switch(piece) {
        case "Rook":
            // Rooks can move in straight lines horizontally or vertically
            return startCol === endCol || startRow === endRow;

        case "Bishop":
            // Bishops move diagonally. The difference between the columns and rows will be the same
            // for a valid diagonal move.
            return Math.abs(startCol - endCol) === Math.abs(startRow - endRow);

        case "Queen":
            // Queens combine the powers of rooks and bishops, so they can move in straight lines
            // horizontally, vertically, or diagonally.
            return (startCol === endCol || startRow === endRow) || 
                   (Math.abs(startCol - endCol) === Math.abs(startRow - endRow));

        default:
            return false;
    }
}

console.log(canMove("Rook", "A8", "H8"));    // true
console.log(canMove("Bishop", "A7", "G1"));  // true
console.log(canMove("Queen", "C4", "D6"));   // false
