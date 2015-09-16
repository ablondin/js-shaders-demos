var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});
function preload() {
}

function create() {
    var points;

    window.graphics = game.add.graphics();
    // Sans remplissage
    points = UTILS.regularPolygon(0, 0, 6, 50, Math.PI / 6);
    window.graphics.lineStyle(2, 0xFFFFFF, 1);
    window.graphics.moveTo(points[0][0], points[0][1]);
    for (i = 1; i < points.length; i++) {
        window.graphics.lineTo(points[i][0], points[i][1]);
    }
}

function update() {
}
