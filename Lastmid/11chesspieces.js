/*
canMove("Rook", "A8", "H8") -> true
canMove("Bishop", "A7", "G1") -> true
canMove("Queen", "C4", "D6") -> false
*/

function canMove(piece, fromPosition, toPosition) {
    // Convert positions to row and column indices
    const fromCol = fromPosition.charCodeAt(0) - 'A'.charCodeAt(0);
    const fromRow = parseInt(fromPosition[1]) - 1;
    const toCol = toPosition.charCodeAt(0) - 'A'.charCodeAt(0);
    const toRow = parseInt(toPosition[1]) - 1;

    // Check if positions are within the board's bounds
    if (
        fromCol < 0 || fromCol > 7 || fromRow < 0 || fromRow > 7 ||
        toCol < 0 || toCol > 7 || toRow < 0 || toRow > 7
    ) {
        return false;
    }

    // Check if the move is valid for the given piece
    switch (piece.toLowerCase()) {
        case "king":
            return Math.abs(toCol - fromCol) <= 1 && Math.abs(toRow - fromRow) <= 1;
        case "queen":
            return fromCol === toCol || fromRow === toRow || Math.abs(toCol - fromCol) === Math.abs(toRow - fromRow);
        case "rook":
            return fromCol === toCol || fromRow === toRow;
        case "bishop":
            return Math.abs(toCol - fromCol) === Math.abs(toRow - fromRow);
        case "knight":
            return (Math.abs(toCol - fromCol) === 2 && Math.abs(toRow - fromRow) === 1) ||
                   (Math.abs(toCol - fromCol) === 1 && Math.abs(toRow - fromRow) === 2);
        case "pawn":
            if (fromCol === toCol) {
                if (fromRow === 1) {
                    return toRow === 2 || toRow === 3;
                }
                return toRow === fromRow + 1;
            }
            return Math.abs(toCol - fromCol) === 1 && toRow === fromRow + 1;
        default:
            return false; // Invalid piece name
    }
}
console.log(canMove("Rook", "A8", "H8")); // Output: true
console.log(canMove("Bishop", "A7", "G1")); // Output: true
console.log(canMove("Queen", "C4", "D6")); // Output: false