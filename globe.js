const canvas = document.getElementById("globe");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
});

// ✅ Function to set size dynamically
function resizeRenderer() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

// Initial call
resizeRenderer();

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true
});

const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 10;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  globe.rotation.y += 0.01;

  resizeRenderer(); // 🔥 important for responsiveness

  renderer.render(scene, camera);
}

animate();

// ✅ Window resize fix
window.addEventListener("resize", resizeRenderer);