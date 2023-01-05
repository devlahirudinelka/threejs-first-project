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

const geometry = new THREE.BoxGeometry(1, 1, 1);
console.log(geometry)
const material = new THREE.MeshBasicMaterial({ color: 0x7FE9DE });
console.log(material)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
console.log(cube);
camera.position.z = 5;

//plane geometry
const planegeometry = new THREE.PlaneGeometry(5, 5, 10,10);
const planematerial = new THREE.MeshBasicMaterial({ color: 0x0008C1 });
const planemesh = new THREE.Mesh(planegeometry, planematerial);
scene.add(planemesh);


//ring geometry
const ringgeometry = new THREE.RingGeometry(1, 3, 30);
const ringmaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
const ringmesh = new THREE.Mesh(ringgeometry, ringmaterial);
scene.add(ringmesh);



function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();