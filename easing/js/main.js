var game = new Phaser.Game(800, 800, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});

function preload() {
    game.load.image('cloud', 'assets/cloud.png');
}

function create() {
    var style = {fill: "#fff"};
    game.add.text(5, 50, 'back-in', style);
    game.add.text(5, 150, 'back-out', style);
    game.add.text(5, 250, 'back-in-out', style);
    game.add.text(5, 350, 'bounce-out', style);
    game.add.text(5, 450, 'circular-out', style);
    game.add.text(5, 550, 'sinus-in-out', style);
    game.add.text(5, 650, 'exponential-in', style);
    var cloud1 = game.add.sprite(200, 50, 'cloud');
    var cloud2 = game.add.sprite(200, 150, 'cloud');
    var cloud3 = game.add.sprite(200, 250, 'cloud');
    var cloud4 = game.add.sprite(200, 350, 'cloud');
    var cloud5 = game.add.sprite(200, 450, 'cloud');
    var cloud6 = game.add.sprite(200, 550, 'cloud');
    var cloud7 = game.add.sprite(200, 650, 'cloud');
    // Back-in
    var tween1 = game.add.tween(cloud1);
    tween1.to({x: 650}, 3000); // Durée = 3000 ms
    tween1.easing(Phaser.Easing.Back.In);
    tween1.repeat(-1);
    tween1.start();
    // Back-out
    var tween2 = game.add.tween(cloud2);
    tween2.to({x: 650}, 3000); // Durée = 3000 ms
    tween2.easing(Phaser.Easing.Back.Out);
    tween2.repeat(-1);
    tween2.start();
    // Back-in-out
    var tween3 = game.add.tween(cloud3);
    tween3.to({x: 650}, 3000); // Durée = 3000 ms
    tween3.easing(Phaser.Easing.Back.InOut);
    tween3.repeat(-1);
    tween3.start();
    // Bounce-out
    var tween4 = game.add.tween(cloud4);
    tween4.to({x: 650}, 3000); // Durée = 3000 ms
    tween4.easing(Phaser.Easing.Bounce.Out);
    tween4.repeat(-1);
    tween4.start();
    // Circular-out
    var tween5 = game.add.tween(cloud5);
    tween5.to({x: 650}, 3000); // Durée = 3000 ms
    tween5.easing(Phaser.Easing.Circular.Out);
    tween5.repeat(-1);
    tween5.start();
    // Sinusoidal-in-out
    var tween6 = game.add.tween(cloud6);
    tween6.to({x: 650}, 3000); // Durée = 3000 ms
    tween6.easing(Phaser.Easing.Sinusoidal.InOut);
    tween6.yoyo(true);
    tween6.repeat(-1);
    tween6.start();
    // Exponential-in
    var tween7 = game.add.tween(cloud7);
    tween7.to({x: 650}, 3000); // Durée = 3000 ms
    tween7.easing(Phaser.Easing.Exponential.In);
    tween7.repeat(-1);
    tween7.start();
}

function update() {
}
