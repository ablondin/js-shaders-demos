// Variables globales
var scene; 
var camera; 
var distance = 200;
var numBalls = 50;
var balls;
var gravity = -30;
var ballsCloud;
var lastTime = new Date().getTime() * 0.0001;

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
    balls = new THREE.Geometry();
    ballMaterial = new THREE.PointCloudMaterial({color: 0xFFFFFF, size: 7, map: THREE.ImageUtils.loadTexture("assets/ball.png"), blending: THREE.AdditiveBlending, transparent: true});
    for (var b = 0; b < numBalls; ++b) {
        var x = Math.random() * 94 - 47;
        var y = Math.random() * 94 - 47;
        var z = Math.random() * 94 - 47;
        var ball = new THREE.Vector3(x, y, z);
        ball.velocity = new THREE.Vector3(300 * Math.random(), 0, 300 * Math.random());
        balls.vertices.push(ball);
    }
    ballsCloud = new THREE.PointCloud(balls, ballMaterial);
    ballsCloud.sortParticles = true;
    scene.add(ballsCloud);
} 

function animateScene() { 
    var currentTime = new Date().getTime() * 0.0001;
    var deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    console.log(deltaTime);
    camera.position.x = -distance * Math.cos(currentTime * 2);
    camera.position.z = distance * Math.sin(currentTime * 2);
    camera.lookAt(scene.position); 

    // Animation des balles
    for (var b = 0; b < numBalls; ++b) {
        var ball = balls.vertices[b];
        if (ball.x < -50 || ball.x > 50) ball.velocity.x *= -1.0;
        if (ball.y < -50 || ball.y > 50) ball.velocity.y *= -0.95;
        if (ball.z < -50 || ball.z > 50) ball.velocity.z *= -1.0;
        var velocity = new THREE.Vector3();
        velocity.copy(ball.velocity);
        velocity.multiplyScalar(deltaTime);
        ball.add(velocity);
        ball.velocity.y += gravity;
    }
    ballsCloud.geometry.verticesNeedUpdate = true;

    requestAnimationFrame(animateScene); 
    renderScene(); 
} 

function renderScene(){ 
    renderer.render(scene, camera); 
} 
