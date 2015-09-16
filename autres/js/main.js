var game = new Phaser.Game(400, 200, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function preload() {
}

function create() {
    window.graphics = game.add.graphics();
    window.graphics.beginFill(0xFF00FF, 1);
    window.graphics.lineStyle(2, 0x0000FF, 1);
    // Un rectangle
    window.graphics.drawRect(50, 50, 100, 75);
    // Un cercle
    window.graphics.drawCircle(200, 100, 50);
    // Une ellipse
    window.graphics.drawEllipse(300, 100, 20, 80);
    window.graphics.endFill();
}

function update() {
}
