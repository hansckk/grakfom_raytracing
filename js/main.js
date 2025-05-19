// js/main.js
import * as THREE from 'three';
import { initSceneAndCamera, initRenderer } from './sceneSetup.js';
import { createCube, createSphere } from './objects.js';
import { startAnimationLoop } from './animation.js';
import { setupResizeHandler } from './resize.js';

function main() {
    const container = document.getElementById('scene-container');
    if (!container) {
        console.error("Container #scene-container tidak ditemukan!");
        return;
    }

    const { scene, camera } = initSceneAndCamera();
    // Posisikan kamera agar lebih mirip sudut pandang di gambar
    camera.position.set(1.5, 1.3, 2.8); // Sedikit disesuaikan untuk tampilan lebih baik
    camera.lookAt(0, 0, 0); // Pastikan kamera melihat ke pusat

    const renderer = initRenderer(container);

    // Tambahkan pencahayaan agar material MeshStandardMaterial pada bola terlihat
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Cahaya ambient
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // Cahaya dari satu arah
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // 1. Buat Kubus Utama (sekarang wireframe)
    const mainCube = createCube();
    scene.add(mainCube);

    // 2. Buat Bola-bola
    // Bola Biru
    const blueSphere = createSphere(0x0000ff, 0.20); // Biru, radius 0.20
    // Posisi relatif terhadap pusat kubus (0,0,0)
    // Berdasarkan gambar: sedikit di atas, agak ke kiri-depan
    // Kubus default berukuran 1x1x1, jadi permukaan atas ada di y=0.5
    blueSphere.position.set(-0.15, 0.35, 0.3);

    // Bola Merah Marun
    const maroonColor = 0x800000;
    const maroonSphere = createSphere(maroonColor, 0.25); // Merah marun, radius sedikit lebih besar 0.25
    // Berdasarkan gambar: agak di kanan, sedikit di depan, sedikit di bawah tengah
    // Permukaan kanan ada di x=0.5
    maroonSphere.position.set(0.3, -0.05, 0.35);


    // 3. Atur Hierarki: Jadikan bola sebagai child dari kubus
    mainCube.add(blueSphere);
    mainCube.add(maroonSphere);

    setupResizeHandler(camera, renderer);

    // Hanya mainCube yang perlu dianimasikan secara eksplisit.
    // Anak-anaknya (bola) akan ikut berputar karena hierarki.
    startAnimationLoop(renderer, scene, camera, [mainCube]);
}

main();