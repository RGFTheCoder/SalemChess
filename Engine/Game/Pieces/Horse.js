const Piece = require("./Piece");

class Horse extends Piece {
    constructor (isWhite, tile, role) {
        super(isWhite, tile, role);
    }

    get allowedMoves () {
        return [
            this.tile.game.getTile(this.tile.x - 2, this.tile.y - 1),
            this.tile.game.getTile(this.tile.x + 2, this.tile.y - 1),
            this.tile.game.getTile(this.tile.x - 2, this.tile.y + 1),
            this.tile.game.getTile(this.tile.x + 2, this.tile.y + 1),

            this.tile.game.getTile(this.tile.x - 1, this.tile.y - 2),
            this.tile.game.getTile(this.tile.x + 1, this.tile.y - 2),
            this.tile.game.getTile(this.tile.x - 1, this.tile.y + 2),
            this.tile.game.getTile(this.tile.x + 1, this.tile.y + 2)
        ].filter(tile => tile && ((tile.piece && tile.piece.isWhite !== this.isWhite) || !tile.piece));
    }
}

module.exports = Horse;