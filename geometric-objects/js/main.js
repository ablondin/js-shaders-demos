var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
var graphics;

function preload() {
}

function create() {
    // Un nouveau graphique avec position initiale (100,100)
    var graphics = game.add.graphics();

    // On fixe l'épaisseur, la couleur et la transparence
    graphics.lineStyle(5, 0x0000FF, 1);

    // On dessine un carré dont les côtés mesurent 100
    graphics.drawRect(100, 200, 50, 50);

    // On dessine un cercle rouge avec intérieur vert
    graphics.lineStyle(2, 0xFF0000, 1);
    graphics.beginFill(0x00FF00);
    graphics.drawCircle(300, 300, 50);
    graphics.endFill();

    // On peut aussi dessiner une ellipse
    graphics.drawEllipse(400, 100, 80, 50);

    // Dessinons un hexagone centré en (500,400)
    var centerX = 500, centerY = 400, radius = 70;
    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.drawCircle(centerX, centerY, 2);       // Le point central
    graphics.moveTo(centerX + radius, centerY);     // On se place au premier point
    for (i = 0; i < 6; ++i) {
        var angle = (i + 1) * 2 * Math.PI / 6;
        var x = centerX + radius * Math.cos(angle);
        var y = centerY + radius * Math.sin(angle);
        graphics.lineTo(x, y);
    }
}

function update() {
}
