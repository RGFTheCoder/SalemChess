const {DoctorHeal} = require("../Effects");

const Role = require("./Role");

class Doctor extends Role {
    constructor () {
        super();
        this.name = "Doctor";
        this.attemptedDeathMessage = "This piece is being healed by a nearby doctor.";
    }

    passiveEffects () {
        const tileLeft = this.piece.tile.game.getTile(this.piece.tile.x - 1, this.piece.tile.y);
        const tileRight = this.piece.tile.game.getTile(this.piece.tile.x + 1, this.piece.tile.y);
        if (tileLeft && tileLeft.piece && tileLeft.piece.isWhite === this.piece.isWhite && !(tileLeft.piece.role && tileLeft.piece.role.name !== this.name)) tileLeft.piece.addEffect(new DoctorHeal(this.piece, tileLeft.piece));
        if (tileRight && tileRight.piece && tileRight.piece.isWhite === this.piece.isWhite && !(tileRight.piece.role && tileRight.piece.role.name !== this.name)) tileRight.piece.addEffect(new DoctorHeal(this.piece, tileRight.piece));
        let tileUp;
        if (this.piece.isWhite) {
            tileUp = this.piece.tile.game.getTile(this.piece.tile.x, this.piece.tile.y - 1);
        } else {
            tileUp = this.piece.tile.game.getTile(this.piece.tile.x, this.piece.tile.y + 1);
        }
        if (tileUp && tileUp.piece && tileUp.piece.isWhite === this.piece.isWhite && !(tileUp.piece.role && tileUp.piece.role.name !== this.name)) tileUp.piece.addEffect(new DoctorHeal(this.piece, tileUp.piece));
    }
}

module.exports = Doctor;