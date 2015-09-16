var game = new Phaser.Game(400, 200, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function preload() {
}

function create() {
    var points = [[50,100], [100,50], [150,150]];
    window.graphics = game.add.graphics();
    // Sans remplissage
    window.graphics.lineStyle(2, 0xFFFFFF, 1);
    window.graphics.moveTo(points[0][0], points[0][1]);
    for (i = 1; i < points.length; i++) {
        window.graphics.lineTo(points[i][0], points[i][1]);
    }
    // Avec remplissage
    points = [[200,100], [250,50], [300,150]];
    window.graphics.beginFill(0x0000FF, 1.0);
    window.graphics.lineStyle(2, 0xFFFFFF, 1);
    window.graphics.moveTo(points[0][0], points[0][1]);
    for (i = 1; i < points.length; i++) {
        window.graphics.lineTo(points[i][0], points[i][1]);
    }
    window.graphics.endFill();
}

function update() {
}
