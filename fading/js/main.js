var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});
var circle;
var startTime;

function preload() {
}

function create() {
    circle = game.add.graphics(game.width / 2, game.height / 2);
    circle.lineStyle(0, 0x00FFFF);
    circle.beginFill(0x00FFFF);
    circle.drawCircle(0, 0, 300);
    circle.endFill();
    startTime = game.time.time;
}

function update() {
    var period = 3;
    var t = (game.time.time - startTime) / 1000;
    circle.alpha = 0.5 * (1 + Math.sin(2 * Math.PI * t / period));
}
