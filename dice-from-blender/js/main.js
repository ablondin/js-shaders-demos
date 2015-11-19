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


    // Chargement de la bille
    var loader = new THREE.JSONLoader();
    loader.load('assets/dice.json', function(geometry, materials) {
        var material = new THREE.MeshFaceMaterial(materials);
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    });
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
