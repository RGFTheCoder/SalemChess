const Effect = require("./Effect");

class DoctorHeal extends Effect {
    constructor (parentPiece, piece) {
        super(parentPiece, piece);
    }

    canDie (attackingPiece) {
        return false; //We can't die because we're being healed.
    }

    run () {
        if (!this.parentPiece.tile) return this.delete(); //Doctor is dead, we can't be healed.
        if (
            !(
                [this.piece.tile.x + 1, this.piece.tile.x - 1].includes(this.parentPiece.tile.x) && this.piece.tile.y === this.parentPiece.tile.y
            )
            &&
            !(
                this.piece.tile.x === this.parentPiece.tile.x
                &&
                (
                    (
                        this.piece.isWhite
                        &&
                        this.piece.tile.y === this.parentPiece.tile.y - 1
                    )
                    ||
                    (
                        !this.piece.isWhite
                        &&
                        this.piece.tile.y === this.parentPiece.tile.y + 1
                    )
                )
            )
        ) return this.delete();
    }
}

module.exports = DoctorHeal;