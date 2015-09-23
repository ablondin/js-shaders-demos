var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});

function preload() {
    game.load.image('background', 'assets/background.png');
    game.load.image('rock', 'assets/rock.png');
    game.load.image('cloud', 'assets/cloud.png');
}

function create() {
    game.add.sprite(0, 0, 'background');
    game.add.sprite(400,500, 'rock');
    game.add.sprite(400,450, 'rock');
    game.add.sprite(400,400, 'rock');
    var cloud = game.add.sprite(0,200, 'cloud');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(cloud);    // On démarre le système physique
    cloud.enableBody = true;              // Le nuage est géré dans le système
    cloud.body.velocity.x = 200;          // La vitesse horizontale du nuage
    cloud.body.bounce.x = 1.0;            // La collision est parfaitement élastique
    cloud.body.collideWorldBounds = true; // Collision avec les bords du canvas
}

function update() {
}
