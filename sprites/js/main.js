var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});

function preload() {
    game.load.image('background', 'assets/background.png');
    game.load.image('rock', 'assets/rock.png');
}

function create() {
    game.add.sprite(0, 0, 'background');
    game.add.sprite(400,500, 'rock');
    game.add.sprite(400,450, 'rock');
    game.add.sprite(400,400, 'rock');
}

function update() {
}
