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

    revive () {
        //Maybe this shouldn't be a thing considering it's only useful for 1 role. (Retributionist)
    }

    kill () {
        //Required?   
    }

    onMove (newTile) {
        //When a piece moves.
    }

    onAttack (attackingPiece) {
        //When the piece attacks someone.
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
            if (!tile.piece.role.canDie(tile.piece) || !tile.piece.role.beforeDeath(tile.piece)) return false;
        }
        this.onMove(tile);
        return true;
    }
}

module.exports = Piece;