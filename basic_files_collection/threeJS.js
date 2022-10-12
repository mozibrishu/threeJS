import * as THREE from '//unpkg.com/three@0.123.0/build/three.module.js'
console.log(THREE);
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
  camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 1000);
  camera.position.set(0, 0, 15);
  // camera.lookAt(scene.position);
  camera.lookAt(0, 0, 5);
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(WIDTH, HEIGHT);
  document.body.appendChild(renderer.domElement);
  // renderer.domElement.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
}

function render() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}


function initDesign() {
  // const geometry = new THREE.BoxGeometry(3, 2, 2);
  // const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
  // cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  const geometry = new THREE.BoxGeometry(1, 1, 4,1,2,4);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
   cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // mesh = new THREE.Mesh(
  //   new THREE.SphereGeometry(10, 1, 1),
  //   new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
  // );
  // scene.add(mesh);

  // const geometry = new THREE.SphereGeometry(16, 16, 20);
  // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  // cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );

  // var geometry = new THREE.SphereGeometry(24,32,32);
  // var textureLoader = new THREE.TextureLoader();
  // textureLoader.crossOrigin = true;
  // textureLoader.load("tv.jpg", function (texture) {
  //   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  //   texture.repeat.set(1, 1);
  //   const material = new THREE.MeshLambertMaterial({ map: texture });
  //   cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);
  // })

}

init();
render();