const Piece = require("./Piece");

class Queen extends Piece {
    constructor (isWhite, tile, role) {
        super(isWhite, tile, role);
    }

    get allowedMoves () {
        const moves = [];
        //we're doing downwards from the unit first.
        for (let y = this.tile.y+1; y < 8; y++) {
            const tile = this.tile.game.getTile(this.tile.x, y);
            if (tile.piece && tile.piece.isWhite === this.isWhite) break;
            moves.push(tile);
            if (tile.piece) break; // No need to continue, we colided with something.
        }

        //We're doing upwards now.
        for (let y = this.tile.y-1; y > 0; y--) {
            const tile = this.tile.game.getTile(this.tile.x, y);
            if (tile.piece && tile.piece.isWhite === this.isWhite) break;
            moves.push(tile);
            if (tile.piece) break; // No need to continue, we colided with something.
        }

        //We're doing left now.
        for (let x = this.tile.x-1; x > 0; x--) {
            const tile = this.tile.game.getTile(x, this.tile.y);
            if (tile.piece && tile.piece.isWhite === this.isWhite) break;
            moves.push(tile);
            if (tile.piece) break; // No need to continue, we colided with something.
        }

        for (let x = this.tile.x+1; x < 8; x++) {
            const tile = this.tile.game.getTile(x, this.tile.y);
            if (tile.piece && tile.piece.isWhite === this.isWhite) break;
            moves.push(tile);
            if (tile.piece) break; // No need to continue, we colided with something.
        }


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

module.exports = Queen;