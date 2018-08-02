class Tile {
    constructor (GameManager, x, y) {
        this.game = GameManager;
        this.x = x;
        this.y = y;
        this.piece = null;
    }
}

module.exports = Tile;