// Variables globales
var scene; 
var camera; 
var distance = 200;
var numBalls = 50;
var ballsCloud;

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

    // Génération du cube
    var geometry = new THREE.BoxGeometry(100, 100, 100);
    var material = new THREE.MeshBasicMaterial(0x0000FF);
    material.wireframe = true;
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Génération des balles
    var balls = new THREE.Geometry();
    ballMaterial = new THREE.PointCloudMaterial({color: 0xFFFFFF, size: 7});
    for (var b = 0; b < numBalls; ++b) {
        var x = Math.random() * 94 - 47;
        var y = Math.random() * 94 - 47;
        var z = Math.random() * 94 - 47;
        var ball = new THREE.Vector3(x, y, z);
        balls.vertices.push(ball);
    }
    ballsCloud = new THREE.PointCloud(balls, ballMaterial);
    ballsCloud.sortParticles = true;
    scene.add(ballsCloud);
} 

function animateScene() { 
    var timer = new Date().getTime() * 0.0002;
    camera.position.x = -distance * Math.cos(timer);
    camera.position.z = distance * Math.sin(timer);
    camera.lookAt(scene.position); 
    requestAnimationFrame(animateScene); 
    renderScene(); 
} 

function renderScene(){ 
    renderer.render(scene, camera); 
} 
