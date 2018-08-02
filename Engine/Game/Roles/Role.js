class Role {
    constructor () {
        this.piece = null;
        this.name = null;
        this.data = {};
    }

    get allowedMoves () {
        return [];
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