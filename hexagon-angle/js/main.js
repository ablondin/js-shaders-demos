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
function Scene (graphics, angle, radius) { // NOUVEAU
    this.graphics = graphics;
    this.angle = angle; // NOUVEAU
    this.radius = radius;
}

Scene.prototype.drawZone = function (angle, color) {
    this.graphics.lineStyle(0, color, 1);
    this.graphics.moveTo(this.radius * Math.cos(angle),
                         this.radius * Math.sin(angle));
    this.graphics.beginFill(color);
    this.graphics.lineTo(12 * this.radius * Math.cos(angle),
                         12 * this.radius * Math.sin(angle));
    this.graphics.lineTo(12 * this.radius * Math.cos(angle + Math.PI / 3),
                         12 * this.radius * Math.sin(angle + Math.PI / 3));
    this.graphics.lineTo(this.radius * Math.cos(angle + Math.PI / 3),
                         this.radius * Math.sin(angle + Math.PI / 3));
    this.graphics.endFill();
}

Scene.prototype.update = function () {
    this.graphics.clear();
    this.graphics.x = game.cx;
    this.graphics.y = game.cy;
    // Zones
    var darkColor = 0x001F1F;
    var lightColor = 0x002F2F;
    this.drawZone(this.angle, darkColor); // NOUVEAU
    this.drawZone(this.angle + Math.PI / 3, lightColor); // NOUVEAU
    this.drawZone(this.angle + 2 * Math.PI / 3, darkColor); // NOUVEAU
    this.drawZone(this.angle + 3 * Math.PI / 3, lightColor); // NOUVEAU
    this.drawZone(this.angle + 4 * Math.PI / 3, darkColor); // NOUVEAU
    this.drawZone(this.angle + 5 * Math.PI / 3, lightColor); // NOUVEAU
    // Polygon
    this.graphics.lineStyle(5, 0x00FFFF, 1);
    this.graphics.drawRegularPolygon(0, 0, 6, this.radius, this.angle); // NOUVEAU
};

// -------------- //
// Main functions //
// -------------- //
function preload() {
}

function create() {
    scene = new Scene(game.add.graphics(), 0, 50);
}

function update() {
    var elapsed = game.time.elapsed / 1000; // Temps écoulé en secondes
    var angularSpeed = Math.PI; // NOUVEAU
    var direction = (game.time.time / 1000) % 10 < 5 ? 1 : -1; // NOUVEAU
    scene.radius = 5 * Math.random() + 50;
    scene.angle += direction * elapsed * angularSpeed; // NOUVEAU
    scene.update();
}
