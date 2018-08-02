const Piece = require("./Piece");

class King extends Piece {
    constructor (isWhite, tile, role) {
        super(isWhite, tile, role);
    }

    get allowedMoves () {
        return [
            this.tile.game.getTile(this.tile.x - 1, this.tile.y), //Left of us.
            this.tile.game.getTile(this.tile.x + 1, this.tile.y), //Right of us.
            this.tile.game.getTile(this.tile.x, this.tile.y + 1), //Below us.
            this.tile.game.getTile(this.tile.x, this.tile.y - 1), //Above us.
            this.tile.game.getTile(this.tile.x - 1, this.tile.y - 1), //Above to the left.
            this.tile.game.getTile(this.tile.x + 1, this.tile.y - 1), //Above to the right.
            this.tile.game.getTile(this.tile.x - 1, this.tile.y + 1), //Below to the left.
            this.tile.game.getTile(this.tile.x + 1, this.tile.y + 1) //Below to the right.
        ].filter(tile => tile && ((tile.piece && tile.piece.isWhite !== this.isWhite) || !tile.piece));
    }
}

module.exports = King;