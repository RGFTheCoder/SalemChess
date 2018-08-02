const Tile = require("../Game/Tile");

class GameManager {

    //TODO: Add NetworkManager and stuff to constructor.
    constructor (isWhiteTurn = 1, pieces) {
        this.board = [];
        for (let y = 0; y < 8; y++) {
            const row = [];
            for (let x = 0; x < 8; x++) {
                row.push(new Tile(this, x, y));
            }
            this.board.push(row);
        }
        this.isWhiteTurn = isWhiteTurn;
        this.deadPieces = [];
    }

    getTile (x, y) {
        return this.board[y] ? this.board[y][x] : null;
    }

    nextTurn () {
        this.isWhiteTurn = !this.isWhiteTurn;
    }

}

module.exports = GameManager;