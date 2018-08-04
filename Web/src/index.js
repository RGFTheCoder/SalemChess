const Pixi = require("pixi.js");
const io = require("socket.io-client");

window.addEventListener("load", () => {

    const app = new Pixi.Application(512, 512, {
        backgroundColor: 0xb7a586
    });

    const pieces = {
        black: {
            pawn: Pixi.Sprite.fromImage("/static/pieces/black-pawn.png")
        }
    };
    
    //const socket = io(`${document.location.protocol}//${document.location.host}`);
    
    const socket = io(`/${window.gameCode}`);
    socket.on("connect", () => {
        console.log("Connection Established!");
    });
    
    socket.on("ready", playerType => {
        if (playerType === 3) {
            //we are a spectator.
        } else if (playerType === 2) {
            //we are player two.
        } else {
            //we are player 1.
        }
    });
    
    socket.on("end", win => {
        console.log(`We ${win ? "won" : "lost"}.`);
    });
    
    socket.on("disconnect", () => {
        console.log("Connection Destroyed!");
    });
    
    socket.on("error", console.error);
    
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const graphics = new Pixi.Graphics();
            graphics.beginFill(y % 2 === x % 2 ? 0x998666 : 0xc4b49b);
            graphics.drawRect(x*64, y*64, 64, 64);
            graphics.endFill();
            graphics.interactive = true;
            graphics.hitArea = graphics.getBounds();
            graphics.click = e => {
                
            };
            app.stage.addChild(graphics);
        }
    }
    
    document.body.appendChild(app.view);

});
