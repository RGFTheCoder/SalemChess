class Piece {
    constructor(isWhite, tile, role) {
        this.isWhite = isWhite;
        this.tile = tile;
        if (role) role.piece = this;
        this.role = role;
        this.data = {};
    }

    get allowedMoves () {
        return [];
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
        if (tile.piece) {
            if (!tile.piece.role.canDie(this) || !tile.piece.role.beforeDeath(this)) return false;
            const oldPiece = tile.piece;
            this.tile.piece = null; //We no longer are at our tile.
            this.tile = tile; //We're changing our current tile to the one we are at.
            tile.piece = this; //We're changing our current tile to the one we are at.
            oldPiece.onDeath(this);
        }
        this.onMove(tile); //pawn. >.>
        return true;
    }
}

module.exports = Piece;