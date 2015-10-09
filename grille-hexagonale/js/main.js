var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});

function preload() {
    game.load.spritesheet('hexagon', 'assets/hexagone.png', 82, 71);
}

function create() {
    game.stage.backgroundColor = 0xFFFFFF;

    for (var i = -8; i < 8; ++i) {
        for (var j = -8; j < 8; ++j) {
            var button;
            button = game.add.button(60.5 * i + game.world.centerX / 2,
                                     -34.5 * i + 200 + j * 71 + game.world.centerY / 2,
                                     'hexagon',
                                     onClick, this, 1, 0, 2, 0);
            var onClick = function(button) {
                button.freezeFrames = !button.freezeFrames;
            }
        }
    }
}


function update() {
}
