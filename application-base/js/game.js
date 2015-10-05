MyGame.Game = function (game) {
    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)
};

MyGame.Game.prototype = {
    create: function () {
        var word = "game over";
        for (var i = 0; i < word.length; ++i) {
            if (word[i] != ' ') {
                // On récupère la sprite de la lettre correspondante
                // La largeur de chaque lettre est 37
                // La hauteur initiale est -100 pour ne pas voir les lettres
                var letter = this.game.add.sprite(i * 37 + 50, -100, 'fonts', word.charCodeAt(i) - 97);
                // Puis on ajoute l'animation avec rebonds (Bounce.Out)
                // Le premier "true" signifie que l'animation est lancée automatiquement
                // Le délai avant de commencer est 50 * i (pour créer un décalage)
                this.game.add.tween(letter).to({y: 200}, 2000, Phaser.Easing.Bounce.Out, true, 50 * i);
            }
        }

        // Lorsqu'on clique on retourne au menu principal
        this.game.input.onDown.add(onDown, this);
        function onDown() {
            this.game.state.start('menu');
        };
    },

    update: function () {
    },
};
