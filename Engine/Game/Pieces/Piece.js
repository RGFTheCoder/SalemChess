let pieceID = 0;

class Piece {
    constructor(isWhite, tile, role) {
        this.isWhite = isWhite;
        this.tile = tile;
        if (role) role.piece = this;
        this.role = role;
        this.data = {};
        this.id = pieceID++;
        this.alive = true;
    }

    get allowedMoves () {
        return [];
    }

    get effects () {
        if (!this.tile.game.effects.effected[this.id]) this.tile.game.effects.effected[this.id] = [];
        return this.tile.game.effects.effected[this.id];
    }

    addEffect (effect) {
        if (this.effects.some(effect => effect.constructor.name.includes(effect.constructor.name))) return false;
        this.effects.push(effect);
        return true;
    }

    onMove (newTile) {
        //When a piece moves.
    }

    canMoveTo (tile) {
        return this.allowedMoves.filter(
            tile => this.role.canMoveTo(tile)
        ).concat(this.role.allowedMoves).filter(
            (tile, index, arr) => arr.lastIndexOf(tile) === index
        ).includes(tile);
    }

    moveTo (tile, check = false) {
        if (check && !this.canMoveTo(tile)) return false;
        //We need to consider that some roles have it so killing them only kills you.
        let oldPiece;
        if (tile.piece) {
            for (const effect of tile.piece.role.effects) {
                if (!effect.canDie) return effect;
            }
            if (!tile.piece.role.canDie(this) || !tile.piece.role.beforeDeath(this)) return false;
            oldPiece = tile.piece;
            this.tile.piece = null; //We no longer are at our tile.
            this.tile = tile; //We're changing our current tile to the one we are at.
            tile.piece = this; //We're changing our current tile to the one we are at.
        }
        if (this.role) this.role.onMove(tile);
        this.onMove(tile); //pawn. >.>
        if (oldPiece) oldPiece.onDeath(this);
        this.tile.game.effects.run();
        for (const piece of this.tile.game.pieces) {
            if (piece.role && piece.tile) piece.role.passiveEffects();
        }
        return true;
    }
}

module.exports = Piece;