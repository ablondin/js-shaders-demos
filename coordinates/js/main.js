var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function preload() {
}

function create() {
    var positions = [[0,0], [100,500], [400,100], [650,550], [800,600]];
    for (i = 0; i < positions.length; ++i) {
        var text = "(" + positions[i].toString() + ")";
        game.add.text(positions[i][0], positions[i][1], text, {fill: 'white'});
    }
}

function update() {
}
