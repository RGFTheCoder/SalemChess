const {GameManager} = require("../../Engine");

class NetworkGame {
    constructor (nsp ,code, createdRooms) {
        this.code = code;
        this.nsp = nsp;
        this.allRooms = createdRooms;
        this.started = true;
        this.game = new GameManager();

        this.players = [];
        this.spectators = [];
        this.chat = [];

        this.nsp.on("connection", socket => {
            const isSpectator = this.players.length >= 2;
            if (this.players.length >= 2) {
                this.spectators.push(socket);
            } else {
                this.players.push(socket);
            }

            socket.on("disconnect", () => {
                if (isSpectator) this.spectators = this.spectators.filter(spec => spec !== socket);
                else this.players = this.players.filter(player => player !== socket);
                if (!isSpectator) {
                    if (this.started) {
                        if (this.players[0]) this.players[0].emit("end", 1); //Win!
                        this.allRooms.splice(this.allRooms.indexOf(this.code), 1);
                        if (this.players[0]) this.players[0].disconnect();
                    } else {
                        if (this.players[0]) this.players[0].emit("ready", 1); //Reconfirming or changing the player that did not leave.
                    }
                    
                }
            })

            if (!isSpectator) {
                if (this.players[1]) {
                    //we are the second player.
                    socket.emit("ready", 2);
                    console.log("player two is up and ready. Game is ready!");
                } else {
                    //we are the first player.
                    socket.emit("ready", 1);
                    console.log("player one is up and ready.");
                }
            } else {
                //we're a spectator.
            }

        });
    }
}

module.exports = NetworkGame;