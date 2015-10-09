/* Le singleton qui contiendra tout ce qui est relatif à cette application.
   En principe, il devrait s'agir de l'UNIQUE variable globale de l'application. */

var MyGame = {}; 

// Le constructeur de l'objet Boot
MyGame.Boot = function (game) {
};

// Les méthodes de l'objet Boot
MyGame.Boot.prototype = {
    init: function () {
        // Si votre application tient compte des pointeurs multiples ou non
        // Concerne par exemple les appareils avec écran tactile qui tiennent
        // compte des événements déclenchés lorsqu'on utilise plusieurs doigts
        this.input.maxPointers = 1;

        // Arrière-plan
        this.stage.backgroundColor = 0xFFFFFF;

        // Pour économiser de l'énergie si l'application n'a pas le 'focus'
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            // Éléments spécifiques aux applications sur 'Desktop'
            this.scale.pageAlignHorizontally = true;
        } else {
            // Éléments spécifiques aux applications sur 'mobiles'
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(400, 300, 800, 600);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }
    },

    preload: function () {
        // Chargement des images seulement pour l'affichage de la progression
        // du véritable préchargement
        this.load.image('progression-bar', 'assets/progression-bar.png');

    },

    create: function () {
        // Puis on lance le préchargement véritable
        this.state.start('preloader');
    }
};
