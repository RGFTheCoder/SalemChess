const Tile = require("../Game/Tile");
const EffectManager = require("./EffectManager");

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
        this.pieces = [];
        this.effects = new EffectManager(this);
    }

    getTile (x, y) {
        return this.board[y] ? this.board[y][x] : null;
    }

    nextTurn () {
        for (const piece of this.pieces) if (piece.role && piece.tile && piece.isWhite === this.isWhiteTurn) piece.role.passiveTurn();
        this.isWhiteTurn = !this.isWhiteTurn;
    }

    addPiece (tile, piece) {
        tile.piece = piece;
        this.pieces.push(piece);
    }

}

module.exports = GameManager;