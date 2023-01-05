//create a scene start
import * as THREE from 'three';
import './style.css';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//create a scene end

console.log(scene);
console.log(camera);
console.log(renderer);

const geometry = new THREE.BoxGeometry(2, 2, 2,);
console.log(geometry)
const material = new THREE.MeshBasicMaterial({ color: 0x7FE9DE });
console.log(material)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
console.log(cube);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();