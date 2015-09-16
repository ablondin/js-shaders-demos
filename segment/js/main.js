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

function drawSegment(x1, y1, x2, y2, width, color, showLabel) {
    drawPoint(x1, y1, 8, color, showLabel);
    drawPoint(x2, y2, 8, color, showLabel);
    window.graphics.lineStyle(width, color, 1);
    window.graphics.beginFill(color, 1.0);
    window.graphics.moveTo(x1, y1);
    window.graphics.lineTo(x2, y2);
    window.graphics.endFill();
}

function preload() {
}

function create() {
    drawSegment(100, 100, 293, 158, 8, 0xFFFFFF, true);
}

function update() {
}
