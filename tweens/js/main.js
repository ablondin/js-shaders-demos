var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});

function preload() {
    game.load.image('cloud', 'assets/cloud.png');
}

function create() {
    var style = {fill: "#fff"};
    game.add.text(5, 100, 'simple', style);
    game.add.text(5, 200, 'yoyo', style);
    game.add.text(5, 300, 'loop', style);
    game.add.text(5, 400, 'yoyo+repeat', style);
    var cloud1 = game.add.sprite(200, 100, 'cloud');
    var cloud2 = game.add.sprite(200, 200, 'cloud');
    var cloud3 = game.add.sprite(200, 300, 'cloud');
    var cloud4 = game.add.sprite(200, 400, 'cloud');
    var tween1 = game.add.tween(cloud1);
    tween1.to({x: 650}, 3000); // Durée = 3000 ms
    tween1.start();
    var tween2 = game.add.tween(cloud2);
    tween2.to({x: 650}, 3000);
    tween2.yoyo(true);
    tween2.start();
    var tween3 = game.add.tween(cloud3);
    tween3.to({x: 650}, 3000);
    tween3.loop(true);
    tween3.start();
    var tween4 = game.add.tween(cloud4);
    tween4.to({x: 650}, 3000);
    tween4.yoyo(true);
    tween4.repeat(-1); // Bizarrement, loop ne fonctionne pas
    tween4.start();
}

function update() {
}
