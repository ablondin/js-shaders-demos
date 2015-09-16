var UTILS = {}

/*
 * Adds a method to Phaser Graphics object for drawing regular polygons.
 *
 * @param x  The x-coordinate of the center of the polygon
 * @param y  The y-coordinate of the center of the polygon
 * @param n  The number of sides of the polygon
 * @param r  The radius of the polygon
 * @param a  The angle of the polygon
 */
Graphics.prototype.drawRegularPolygon = function (x, y, n, r, a) {
    this.moveTo(x + r * Math.cos(a), y + r * Math.sin(a));
    for (var i = 1; i <= n; i++) {
        var px = x + r * Math.cos(a + i * 2 * Math.PI / n);
        var py = y + r * Math.sin(a + i * 2 * Math.PI / n);
        this.lineTo(px, py);
    }
}

UTILS.cartesian2screen = function (x, y) {
    return [game.width / 2 + x, game.height / 2 - y];
}

UTILS.polar2cartesian = function (r, a) {
    return [r * Math.cos(a), r * Math.sin(a)];
}

UTILS.polar2screen = function (r, a) {
    var point = this.polar2cartesian(r, a);
    return this.cartesian2screen(point[0], point[1]);
}

