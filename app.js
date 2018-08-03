const {GameManager, Pieces, Roles} = require("./Engine");

const INIT_BOARD = {
    0: [
        [0, "Rook"],
        [0, "Horse"],
        [0, "Bishop"],
        [0, "Queen"],
        [0, "King"],
        [0, "Bishop"],
        [0, "Horse"],
        [0, "Rook"]
    ],
    1: [
        [0, "Pawn"],
        [0, "Pawn"],
        [0, "Pawn"],
        [0, "Pawn"],
        [0, "Pawn"],
        [0, "Pawn"],
        [0, "Pawn"],
        [0, "Pawn"]
    ],
    6: [
        [1, "Pawn"],
        [1, "Pawn"],
        [1, "Pawn"],
        [1, "Pawn"],
        [1, "Pawn"],
        [1, "Pawn"],
        [1, "Queen"],
        [1, "Pawn"]
    ],
    7: [
        [1, "Rook"],
        [1, "Horse"],
        [1, "Bishop"],
        [1, "Queen"],
        [1, "King"],
        [1, "Bishop"],
        [1, "Horse"],
        [1, "Rook"]
    ]
};

const Game = new GameManager();
for (const y in INIT_BOARD) {
    for (let x = 0; x < 8; x++) {
        if (!INIT_BOARD[y][x]) continue;
        const tile = Game.getTile(x, y);
        if (INIT_BOARD[y][x][1] === null) continue;
        Game.addPiece( new Pieces[INIT_BOARD[y][x][1]](INIT_BOARD[y][x][0], tile, new Roles.Doctor()), tile );
    }
}