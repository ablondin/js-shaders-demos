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
    var amplitude = 100;
    var period = 5;
    var t = (game.time.time - startTime) / 1000; // Temps écoulé depuis le début
    var red = 255 - amplitude * (1 + Math.sin(2 * Math.PI * t / period));
    var blue = 255 - amplitude * (1 + Math.cos(2 * Math.PI * t / period));
    var color = red << 16 | blue;
    circle.clear();
    circle.lineStyle(10, color, 1);
    circle.drawCircle(0, 0, 200);
}
