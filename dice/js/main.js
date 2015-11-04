// Variables globales
var scene; 
var camera; 
var distance = 8;

// Initialisation de la scène
initializeScene(); 

// Animation de la scène
animateScene(); 

function initializeScene(){ 
    // Initialisation du canvas
    renderer = new THREE.WebGLRenderer({antialias: true}); 
    renderer.setClearColor(0x000000, 1); 
    canvasWidth = 800; 
    canvasHeight = 600; 
    renderer.setSize(canvasWidth, canvasHeight); 
    document.getElementById("canvas").appendChild(renderer.domElement); 

    // Initialisation de la scène et de la caméra
    scene = new THREE.Scene(); 
    camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 1, 1000); 
    camera.position.set(0, distance / 2, distance); 
    camera.lookAt(scene.position); 
    scene.add(camera); 

    // De la lumière
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    directionalLight.position.set(0, 100, 0);
    scene.add(directionalLight);
    var ambientLight = new THREE.AmbientLight(0xF0F0F0);
    scene.add(ambientLight); 

    // Chargement du dé
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('assets/dice.png')});

    // Découpe des portions de texture
    var five  = [new THREE.Vector2(0, 0.5),      // Coin inférieur gauche
                 new THREE.Vector2(0.333, 0.5),  // Coin inférieur droit
                 new THREE.Vector2(0.333, 0.75), // Coin supérieur droit
                 new THREE.Vector2(0, 0.75)];    // Coin supérieur gauche
    var six   = [new THREE.Vector2(0.333, 0),
                 new THREE.Vector2(0.666, 0),
                 new THREE.Vector2(0.666, 0.25),
                 new THREE.Vector2(0.333, 0.25)];
    var three = [new THREE.Vector2(0.333, 0.25),
                 new THREE.Vector2(0.666, 0.25),
                 new THREE.Vector2(0.666, 0.5),
                 new THREE.Vector2(0.333, 0.5)];
    var one   = [new THREE.Vector2(0.333, 0.5),
                 new THREE.Vector2(0.666, 0.5),
                 new THREE.Vector2(0.666, 0.75),
                 new THREE.Vector2(0.333, 0.75)];
    var four  = [new THREE.Vector2(0.333, 0.75),
                 new THREE.Vector2(0.666, 0.75),
                 new THREE.Vector2(0.666, 1),
                 new THREE.Vector2(0.333, 1)];
    var two   = [new THREE.Vector2(0.666, 0.5),
                 new THREE.Vector2(1, 0.5),
                 new THREE.Vector2(1, 0.75),
                 new THREE.Vector2(0.666, 0.75)];

    // Fonction de texture vers les triangles
    geometry.faceVertexUvs[0] = [];
    geometry.faceVertexUvs[0][0]  = [one[0], one[1], one[3]];
    geometry.faceVertexUvs[0][1]  = [one[1], one[2], one[3]];
    geometry.faceVertexUvs[0][2]  = [six[0], six[1], six[3]];
    geometry.faceVertexUvs[0][3]  = [six[1], six[2], six[3]];
    geometry.faceVertexUvs[0][4]  = [two[0], two[1], two[3]];
    geometry.faceVertexUvs[0][5]  = [two[1], two[2], two[3]];
    geometry.faceVertexUvs[0][6]  = [five[0], five[1], five[3]];
    geometry.faceVertexUvs[0][7]  = [five[1], five[2], five[3]];
    geometry.faceVertexUvs[0][8]  = [three[0], three[1], three[3]];
    geometry.faceVertexUvs[0][9]  = [three[1], three[2], three[3]];
    geometry.faceVertexUvs[0][10] = [four[0], four[1], four[3]];
    geometry.faceVertexUvs[0][11] = [four[1], four[2], four[3]];

    // Ajout du maillage
    var mesh = new THREE.Mesh(geometry,  material);
    scene.add(mesh);
} 

function animateScene() { 
    var timer = new Date().getTime() * 0.0005;
    camera.position.x = -distance * Math.cos(timer);
    camera.position.z = distance * Math.sin(timer);
    camera.lookAt(scene.position); 
    requestAnimationFrame(animateScene); 
    renderScene(); 
} 

function renderScene(){ 
    renderer.render(scene, camera); 
} 
