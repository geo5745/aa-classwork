function Game () {

    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 15;
    this.asteroids = [];
    
    this.addAsteroids();

}

Game.prototype.randomPosition = function () {
    let x = Math.random() * this.DIM_X;
    let y = Math.random() * this.DIM_Y;
    return [x,y];
}

Game.prototype.addAsteroids = function () {
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
        let pos = this.randomPosition();
        this.asteroids.push(new Asteroid(pos));
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    this.asteroids.forEach(function(ast) {
        ast.draw.call(ast, ctx);      
    });
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(ast) {
        ast.move.call(ast);      
    });
}

Game.prototype.wrap = function(pos) {
    function adjustPosition(pos) {
        let newpos = pos;
        if (pos[0] > 520) newpos[0] = pos[0] - 520;
        if (pos[0] < -20) newpos[0] = pos[0] + 520;
        if (pos[1] > 520) newpos[1] = pos[1] - 520;
        if (pos[1] < -20) newpos[1] = pos[1] + 520;
        return newpos;
    }
    this.asteroids.forEach(function(ast) {
        //ast.move.call(ast); 
        ast.pos = adjustPosition(ast.pos);     
    });
}

// int max = 50;
// int min = 1;
// // 1. Using Math.random()
// double random = Math.random() * 49 + 1;
// or
// int random = (int)(Math.random() * 50 + 1);


module.exports = Game;