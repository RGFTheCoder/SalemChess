class Role {
    constructor () {
        this.piece = null;
        this.name = null;
        this.data = {};
    }

    get allowedMoves () {
        return [];
    }

    bypassImmunity () {
        //For SK and ChessEnthusiast.
        return false;
    }

    beforeDeath (attackingPiece) {
        //Before our death, do any actions. returning false === we don't actually die.
        //true === continue with death.
        //useful for roles such as life buddy.
        return true;
    }

    canDie (attackingPiece) {
        //Can we actually die? Useful for roles which are immune temporarily.
        return true;
    }

    onMove (newTile) {
        //Called when the piece moves.
    }

    passiveTurn () {
        //Run everytime a turn is passed.
    }

    passiveEffects () {
        //Run everytime a unit moves/dies. (effects should be added here)
    }

    useAbility (tile_or_tiles) {
        //all roles with abilities.
    }

    onDeath (attackingPiece) {
        //When we die, do some actions.
        //E.g. detonator.
    }

    canMoveTo (tile) {
        return this.piece.allowedMoves.includes(tile) || this.allowedMoves.includes(tile);
    }

}

module.exports = Role;