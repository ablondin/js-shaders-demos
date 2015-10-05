var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});
var bird;

function preload() {
    game.load.image('background', 'assets/background.png');
    game.load.image('rock', 'assets/rock.png');
    game.load.image('cloud', 'assets/cloud.png');
    game.load.spritesheet('bird', 'assets/bird.png', 240, 314);
}

function create() {
    game.add.sprite(0, 0, 'background');
    game.add.sprite(400,500, 'rock');
    game.add.sprite(400,450, 'rock');
    game.add.sprite(400,400, 'rock');
    var cloud = game.add.sprite(0,200, 'cloud');
    bird = game.add.sprite(400, 200, 'bird');
    bird.scale.setTo(0.4, 0.4);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(cloud);
    game.physics.arcade.enable(bird);
    cloud.enableBody = true;
    cloud.body.velocity.x = 200;
    cloud.body.bounce.x = 1.0;
    cloud.body.collideWorldBounds = true;
    bird.animations.add('fly');
    bird.animations.play('fly', 30, true); // 50 IPS, boucle infinie = vrai
    bird.enableBody = true;
    bird.body.velocity.x = -100;

    // Lorsqu'on clique on change l'état
    game.input.onDown.add(onDown);
    function onDown() {
        game.paused = !game.paused;
    };
}

function update() {
    if (bird.x < -100) {
        bird.x = game.width;
    }
}
