class Effect {
    constructor (parentPiece, piece) {
        this.parent = parentPiece;
        this.piece = piece;
        this.attemptedDeathMessage = null;
    }

    canDie () {
        return true;
    }

    run () {
        
    }

    delete () {
        for (let eI = 0; eI < this.piece.effects.length; eI++) {
            const effect = this.piece.effects[eI];
            if (effect === this) {
                this.piece.effects.split(eI, 1);
                break;
            }
        }
    }
}

module.exports = Effect;