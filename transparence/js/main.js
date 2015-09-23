var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});
var circle1, circle2;

function preload() {
}

function create() {
    var color1 = 0xFF0000;
    var color2 = 0x00FF00;
    circle1 = game.add.graphics();
    circle1.lineStyle(0, color1);
    circle1.beginFill(color1);
    circle1.drawCircle(300, 300, 300);
    circle1.endFill();
    circle2 = game.add.graphics();
    circle2.lineStyle(0, color2);
    circle2.beginFill(color2, 0.5); // Transparence de 0.5
    circle2.drawCircle(500, 300, 300);
    circle2.endFill();
}

function update() {
}
