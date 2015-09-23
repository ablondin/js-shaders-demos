var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});
var square;

function preload() {
}

function create() {
    square = game.add.graphics();
    square.clear();
    square.lineStyle(2, 0xFF0000, 1);
    square.drawRect(0, 0, 30, 30);
}

function update() {
    var xSpeed = 300;
    var ySpeed = 200;
    var elapsed = game.time.elapsed / 1000; // Temps écoulé en secondes
    square.x += elapsed * xSpeed;
    square.x %= game.width;
    square.y += elapsed * ySpeed;
    square.y %= game.height;
}
