// Variables globales
var scene; 
var camera; 
var distance = 15;

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
    var ambientLight = new THREE.AmbientLight(0x888888);
    scene.add(ambientLight);
    var directionalLight = new THREE.DirectionalLight(0xcccccc, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Chargement du ciel étoilé
    var geometry = new THREE.SphereGeometry(20, 32, 32);
    var material = new THREE.MeshBasicMaterial();
    material.map = THREE.ImageUtils.loadTexture('assets/starfield.png')
    material.side = THREE.BackSide
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Chargement de la sphère
    geometry = new THREE.SphereGeometry(5, 32, 32);
    material = new THREE.MeshPhongMaterial();
    material.map = THREE.ImageUtils.loadTexture('assets/earthmap.jpg')
    mesh = new THREE.Mesh(geometry, material);
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
