var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});
var circle;
var startTime;

function preload() {
}

function create() {
    circle = game.add.graphics(game.width / 2, game.height / 2);
    startTime = game.time.time;
}

function update() {
    var amplitude = 200;
    var period = 3;
    var t = (game.time.time - startTime) / 1000; // Temps écoulé depuis le début
    circle.clear();
    circle.lineStyle(2, 0xFF0000, 1);
    circle.drawCircle(0, 0, 200 + amplitude * Math.sin(2 * Math.PI * t / period));
}
