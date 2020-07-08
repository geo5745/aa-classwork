const Game = require("./game");

function GameView(game,ctx) {

    this.game = game;
    this.ctx = ctx;

}

GameView.prototype.start = function (ctx) {
    function nextFrame() {
        this.game.draw(ctx);
        this.game.moveObjects();
        this.game.wrap();
        // console.log("Test");
    }
    // nextFrame();
    //console.log("timeout 1");
    //setTimeout(nextFrame(),5000);
    //console.log("timeout 2");
    //setTimeout(nextFrame(),5000);
    //console.log("timeout 3");
    //setTimeout(nextFrame(),5000);
    setInterval(function () { nextFrame(); }, 20);



}

module.exports = GameView;