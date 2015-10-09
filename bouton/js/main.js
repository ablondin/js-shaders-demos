var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create});
var button;
var text;

function preload() {
    game.load.spritesheet('button', 'assets/bouton.png', 300, 160);
}

function create() {
    game.stage.backgroundColor = 0xFFFFFF;
    button = game.add.button(game.world.centerX - 150, 400, 'button', actionOnClick,
                             this, 2, 1, 0, 2);
    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    text = game.add.text(game.world.centerX, 200, Math.random());
    text.anchor.setTo(0.5, 0.5);
}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {
    text.text = Math.random();
}
