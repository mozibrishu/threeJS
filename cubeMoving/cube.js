///////
//FPS Stats
///////


var scene, camera, renderer;

var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight;

var SPEED = 0.01/10;

function init() {
    scene = new THREE.Scene();

    initCube();
    initCamera();
    initRenderer();

    $('.container').append(renderer.domElement);
    console.log('hi');
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
}

function initCube() {
    cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
    scene.add(cube);
  
   cube2 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
   scene.add(cube2);
   cube2.position.x = 2;
  
  cube3 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
   scene.add(cube3);
   cube3.position.x = -2;
  
    cube4 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
   scene.add(cube4);
   cube4.position.z = 2;
  
  cube5 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
   scene.add(cube5);
   cube5.position.z = -2;
  
  cube6 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
   scene.add(cube6);
   cube6.position.y = 2;
  
  cube7 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
   scene.add(cube7);
   cube7.position.y = -2;
    
  cube.add(cube2);
  cube.add(cube3);
  cube.add(cube4);
  cube.add(cube5);
  cube.add(cube6);
  cube.add(cube7);
}

function rotateCube() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 3;
}

function render() {
    requestAnimationFrame(render);
    console.log('his');
    rotateCube();
    renderer.render(scene, camera);
}

init();
render();