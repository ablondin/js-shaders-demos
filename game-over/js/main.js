var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game',
               {preload: preload, create: create, update: update});

function preload() {
    game.load.spritesheet('fonts', 'assets/fonts.jpeg', 37, 37);
}

function create() {
    game.stage.backgroundColor = 0xFFFFFF;
    var word = "game over";
    for (var i = 0; i < word.length; ++i) {
        if (word[i] != ' ') {
            // On récupère la sprite de la lettre correspondante
            // La largeur de chaque lettre est 37
            // La hauteur initiale est -100 pour ne pas voir les lettres
            var letter = game.add.sprite(i * 37 + 50, -100, 'fonts', word.charCodeAt(i) - 97);
            // Puis on ajoute l'animation avec rebonds (Bounce.Out)
            // Le premier "true" signifie que l'animation est lancée automatiquement
            // Le délai avant de commencer est 50 * i (pour créer un décalage)
            game.add.tween(letter).to({y: 200}, 2000, Phaser.Easing.Bounce.Out, true, 50 * i);
        }
    }
}

function update() {
}
