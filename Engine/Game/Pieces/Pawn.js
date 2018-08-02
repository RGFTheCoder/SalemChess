const Piece = require("./Piece");

class Pawn extends Piece {
    constructor (isWhite, tile, role) {
        super(isWhite, tile, role);
    }

    onMove () {
        this.data.moved = true;
    }

    get allowedMoves () {
        const moves = [];
        if (this.isWhite) {
            const tileTwo = this.tile.game.getTile(this.tile.x, this.tile.y - 2);
            const tileOne = this.tile.game.getTile(this.tile.x, this.tile.y - 1);
            if (!this.data.moved && tileTwo && !tileTwo.piece && !tileOne.piece) moves.push(tileTwo);
            if (tileOne && !tileOne.piece) moves.push(tileOne);

            const tileLeft = this.tile.game.getTile(this.tile.x - 1, this.tile.y - 1);
            if (tileLeft && tileLeft.piece) moves.push(tileLeft);
            const tileRight = this.tile.game.getTile(this.tile.x + 1, this.tile.y - 1);
            if (tileRight && tileRight.piece) moves.push(tileRight);
        } else {
            const tileTwo = this.tile.game.getTile(this.tile.x, this.tile.y + 2);
            const tileOne = this.tile.game.getTile(this.tile.x, this.tile.y + 1);
            if (!this.data.moved && tileTwo && !tileTwo.piece && !tileOne.piece) moves.push(tileTwo);
            if (tileOne && !tileOne.piece) moves.push(tileOne);

            //I mean technically it should be right... right?
            const tileLeft = this.tile.game.getTile(this.tile.x - 1, this.tile.y + 1);
            if (tileLeft && tileLeft.piece) moves.push(tileLeft);

            //and this should be left. but eh.
            const tileRight = this.tile.game.getTile(this.tile.x + 1, this.tile.y + 1);
            if (tileRight && tileRight.piece) moves.push(tileRight);
        }

        return moves.filter(tile => tile && ((tile.piece && tile.piece.isWhite !== this.isWhite) || !tile.piece));
    }
}

module.exports = Pawn;