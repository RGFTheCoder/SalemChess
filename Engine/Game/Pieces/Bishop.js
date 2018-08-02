const Piece = require("./Piece");

class Bishop extends Piece {
    constructor (isWhite, tile, role) {
        super(isWhite, tile, role);
    }

    get allowedMoves () {
        const moves = [];

        let x = this.tile.x;
        let y = this.tile.y;
        //top left
        while (x > 0 && y > 0) {
            x--;
            y--;
            const tile = this.tile.game.getTile(x, y);
            if (tile && tile.piece && tile.piece.isWhite === this.isWhite) break;
            moves.push(tile);
            if (tile.piece) break;
        }

        //top right.
        x = this.tile.x;
        y = this.tile.y;
        while (x < 7 && y > 0) {
            x++;
            y--;
            const tile = this.tile.game.getTile(x, y);
            if (tile && tile.piece && tile.piece.isWhite === this.isWhite) break;
            moves.push(tile);
            if (tile.piece) break;
        }

        //bottom left.
        x = this.tile.x;
        y = this.tile.y;
        while (x > 0 && y < 7) {
            y++;
            x--;
            const tile = this.tile.game.getTile(x, y);
            if (tile && tile.piece && tile.piece.isWhite === this.isWhite) break;
            moves.push(tile);
            if (tile.piece) break;
        }

        //bottom right.
        x = this.tile.x;
        y = this.tile.y;
        while (x < 7 && y < 7) {
            y++;
            x++;
            const tile = this.tile.game.getTile(x, y);
            if (tile && tile.piece && tile.piece.isWhite === this.isWhite) break;
            moves.push(tile);
            if (tile.piece) break;
        }

        return moves;
    }
}

module.exports = Bishop;