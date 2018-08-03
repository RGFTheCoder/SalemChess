class EffectManager {

    constructor (Game) {
        this.effected = {};
        this.game = Game;
    }

    run () {
        for (const pieceID in this.effected) {
            const effects = this.effected[pieceID];
            for (const effect of effects) effect.run();
        }
    }
}

module.exports = EffectManager;