var game = new Phaser.Game(400, 200, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function drawPoint(x, y, size, color, showLabel) {
    showLabel = typeof showLabel !== 'undefined' ? showLabel : false;
    if (showLabel) {
        var label = game.add.text(x, y, "(" + x + "," + y + ")", {fill: 'white'});
        label.anchor.x = 0.5
        label.anchor.y = 0
    }
    window.graphics = window.graphics || game.add.graphics();
    window.graphics.lineStyle(0);
    window.graphics.beginFill(color, 1.0);
    window.graphics.drawCircle(x, y, size);
    window.graphics.endFill();
}

function preload() {
}

function create() {
    drawPoint(100, 100, 8, 0xFFFFFF);
    drawPoint(293, 158, 8, 0xFF0000, true);
}

function update() {
}
