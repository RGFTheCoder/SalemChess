const {GameManager, Pieces, Roles} = require("./Engine");

const INIT_BOARD = require("./inital_board");

const Game = new GameManager();
for (const y in INIT_BOARD) {
    for (let x = 0; x < 8; x++) {
        if (!INIT_BOARD[y][x]) continue;
        const tile = Game.getTile(x, y);
        if (INIT_BOARD[y][x][1] === null) continue;
        Game.addPiece( new Pieces[INIT_BOARD[y][x][1]](INIT_BOARD[y][x][0], tile, new Roles.Doctor()), tile );
    }
}


require("./Web");
console.log("Loaded.");