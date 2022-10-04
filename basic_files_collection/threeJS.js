import * as THREE from '//unpkg.com/three@0.123.0/build/three.module.js'

var scene, camera, renderer, cube;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

function init() {
  scene = new THREE.Scene();

  initCamera();
  initRenderer();
  initDesign();
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
  camera.position.set(0, 0, 5);
  // camera.lookAt(scene.position);
  camera.lookAt(0, 0, 0);
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(WIDTH, HEIGHT);
  document.body.appendChild(renderer.domElement);
}

function render() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}


function initDesign() {
  const geometry = new THREE.BoxGeometry(3, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

init();
render();