MyGame.Preloader = function(game) {
    this.preloadBar = null;
    this.ready = false;
};

MyGame.Preloader.prototype = {
    preload: function () {
        // On ajoute la barre de progression
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'progression-bar');
        this.preloadBar.anchor.setTo(0.5, 0.5);

        // On indique que la barre de progression affiche effectivement la
        // progression
        // En réalité, l'image est "coupée" selon la proportion de ressources
        // qui ont été chargées
        this.load.setPreloadSprite(this.preloadBar);

        // Puis on fait le chargement de toutes les ressources nécessaires
        this.load.image('background', 'assets/background.png');
        this.load.image('rock', 'assets/rock.png');
        this.game.load.image('cloud', 'assets/cloud.png');
        this.load.spritesheet('bird', 'assets/bird.png', 240, 314);
        this.load.spritesheet('play-button', 'assets/bouton.png', 300, 160);
        this.load.audio('main-theme', ['assets/main-theme.mp3']);
        this.load.spritesheet('fonts', 'assets/fonts.jpeg', 37, 37);
    },

    create: function () {
        // Lorsque le préchargement est terminé, on affiche la barre complète
        this.preloadBar.cropEnabled = false;
    },

    update: function () {
        // Disons qu'il y a de la musique
        if (this.cache.isSoundDecoded('main-theme') && !this.ready) {
            this.ready = true;
            this.state.start('menu');
        }
    }
};
