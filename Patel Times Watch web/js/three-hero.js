import * as THREE from "./vendor/three.module.js";
import { GLTFLoader } from "./vendor/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", function () {
  const mount = document.querySelector("#hero-3d-container");
  if (!mount) {
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, mount.clientWidth / mount.clientHeight, 0.1, 100);
  camera.position.set(0, 1.15, 6.7);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.appendChild(renderer.domElement);

  scene.fog = new THREE.FogExp2(0x050505, 0.07);

  const ambientLight = new THREE.AmbientLight(0xf5d06f, 1.6);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfff1c4, 2.2);
  keyLight.position.set(6, 8, 6);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 30;
  keyLight.shadow.bias = -0.0008;
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xd4af37, 1.6);
  rimLight.position.set(-8, 4, -5);
  scene.add(rimLight);

  const fillLight = new THREE.DirectionalLight(0xaab6ff, 0.55);
  fillLight.position.set(0, 2, 8);
  scene.add(fillLight);

  const stage = new THREE.Group();
  scene.add(stage);

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(2.55, 2.95, 0.4, 72),
    new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 0.82,
      roughness: 0.36,
      clearcoat: 0.7
    })
  );
  base.position.set(0, -1.82, 0);
  base.receiveShadow = true;
  stage.add(base);

  const floorGlow = new THREE.Mesh(
    new THREE.CircleGeometry(3.15, 72),
    new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.08
    })
  );
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.position.set(0, -1.6, 0);
  stage.add(floorGlow);

  const watchAnchor = new THREE.Group();
  watchAnchor.position.y = 0.35;
  stage.add(watchAnchor);

  const pointerTarget = {
    x: 0,
    y: 0
  };

  let watchModel = null;
  loadWatchModel();

  mount.addEventListener("mousemove", function (event) {
    const rect = mount.getBoundingClientRect();
    pointerTarget.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerTarget.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
  });

  mount.addEventListener("mouseleave", function () {
    pointerTarget.x = 0;
    pointerTarget.y = 0;
  });

  window.addEventListener("resize", resizeRenderer);
  resizeRenderer();

  const clock = new THREE.Clock();
  animate();

  function resizeRenderer() {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function applyShadowSettings(object3d) {
    object3d.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material && "envMapIntensity" in child.material) {
          child.material.envMapIntensity = 1.2;
        }
      }
    });
  }

  function setActiveModel(nextModel) {
    if (watchModel) {
      watchAnchor.remove(watchModel);
    }
    watchModel = nextModel;
    applyShadowSettings(watchModel);
    watchAnchor.add(watchModel);
  }

  function triggerFallback() {
    mount.innerHTML = ""; // Remove the three.js canvas
    const img = document.createElement("img");
    img.src = "assets/images/seiko-premium.jpg";
    img.alt = "Static Watch Image Fallback";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.borderRadius = "var(--radius-xl)";
    mount.appendChild(img);
    
    isAnimating = false; // stop animation loop
  }

  function loadWatchModel() {
    const loader = new GLTFLoader();
    const modelUrl = new URL("../assets/models/watch.glb", import.meta.url);

    loader.load(
      modelUrl.href,
      function (gltf) {
        const importedModel = gltf.scene;
        
        let hasMeshes = false;
        importedModel.traverse(function(child) {
          if (child.isMesh) hasMeshes = true;
        });

        if (!hasMeshes) {
          triggerFallback();
          return;
        }

        importedModel.scale.set(1.95, 1.95, 1.95);
        importedModel.rotation.x = -0.18;
        importedModel.rotation.z = 0.16;
        importedModel.position.set(0, 0.15, 0);
        setActiveModel(importedModel);
      },
      undefined,
      function () {
        triggerFallback();
      }
    );
  }

  let isAnimating = true;

  function animate() {
    if (!isAnimating) return;
    const elapsed = clock.getElapsedTime();

    watchAnchor.rotation.y = THREE.MathUtils.lerp(
      watchAnchor.rotation.y,
      pointerTarget.x * 0.38,
      0.05
    );
    watchAnchor.rotation.x = THREE.MathUtils.lerp(
      watchAnchor.rotation.x,
      -0.12 + pointerTarget.y * -0.18,
      0.05
    );
    watchAnchor.position.y = 0.35 + Math.sin(elapsed * 1.2) * 0.08;

    if (watchModel) {
      watchModel.rotation.y += 0.0036;
    }

    base.rotation.y = elapsed * 0.09;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
});
