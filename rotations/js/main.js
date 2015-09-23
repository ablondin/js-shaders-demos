var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});
var square;
var ellipse;

function preload() {
}

function create() {
    square = game.add.graphics(200, 200);
    square.lineStyle(2, 0xFF0000, 1);
    square.drawRect(0, 0, 50, 50);
    ellipse = game.add.graphics(400, 300);
    ellipse.lineStyle(2, 0x00FFFF, 1);
    ellipse.drawEllipse(-15, -25, 30, 50);
}

function update() {
    var squareSpeed = Math.PI / 2;
    var ellipseSpeed = -2 * Math.PI;
    var elapsed = game.time.elapsed / 1000; // Temps écoulé en secondes
    square.rotation += elapsed * squareSpeed;
    ellipse.rotation += elapsed * ellipseSpeed;
}
