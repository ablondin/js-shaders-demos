// ---------------- //
// Global variables //
// ---------------- //
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});
game.cx = game.width / 2;
game.cy = game.height / 2;
var scene;

// ----- //
// Utils //
// ----- //
Phaser.Graphics.prototype.drawRegularPolygon = function (x, y, n, r, a) {
    this.moveTo(x + r * Math.cos(a), y + r * Math.sin(a));
    for (i = 1; i <= n; i++) {
        var a2 = i * 2 * Math.PI / n;
        var x2 = x + r * Math.cos(a + a2);
        var y2 = y + r * Math.sin(a + a2);
        this.lineTo(x2, y2);
    }
}

// ------------ //
// Scene object //
// ------------ //
function Scene (graphics, radius) { // NOUVEAU
    this.graphics = graphics;
    this.radius = radius; // NOUVEAU
}

Scene.prototype.drawZone = function (angle, color) {
    this.graphics.lineStyle(0, color, 1);
    this.graphics.moveTo(this.radius * Math.cos(angle), // NOUVEAU
                         this.radius * Math.sin(angle)); // NOUVEAU
    this.graphics.beginFill(color);
    this.graphics.lineTo(12 * this.radius * Math.cos(angle), // NOUVEAU
                         12 * this.radius * Math.sin(angle)); // NOUVEAU
    this.graphics.lineTo(12 * this.radius * Math.cos(angle + Math.PI / 3), // NOUVEAU
                         12 * this.radius * Math.sin(angle + Math.PI / 3)); // NOUVEAU
    this.graphics.lineTo(this.radius * Math.cos(angle + Math.PI / 3), // NOUVEAU
                         this.radius * Math.sin(angle + Math.PI / 3)); // NOUVEAU
    this.graphics.endFill();
}

Scene.prototype.update = function () {
    this.graphics.clear();
    this.graphics.x = game.cx;
    this.graphics.y = game.cy;
    // Zones
    var darkColor = 0x001F1F;
    var lightColor = 0x002F2F;
    this.drawZone(0, darkColor);
    this.drawZone(Math.PI / 3, lightColor);
    this.drawZone(2 * Math.PI / 3, darkColor);
    this.drawZone(3 * Math.PI / 3, lightColor);
    this.drawZone(4 * Math.PI / 3, darkColor);
    this.drawZone(5 * Math.PI / 3, lightColor);
    // Polygon
    this.graphics.lineStyle(5, 0x00FFFF, 1);
    this.graphics.drawRegularPolygon(0, 0, 6, this.radius, 0); // NOUVEAU
};

// -------------- //
// Main functions //
// -------------- //
function preload() {
}

function create() {
    scene = new Scene(game.add.graphics(), 50); // NOUVEAU
}

function update() {
    scene.radius = 5 * Math.random() + 50; // NOUVEAU
    scene.update(); // NOUVEAU
}
