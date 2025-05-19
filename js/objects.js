// js/objects.js
import * as THREE from 'three';

export function createCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Ukuran kubus 1x1x1

    // Untuk membuat wireframe seperti di gambar
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 }); // Warna garis hijau
    const wireframeCube = new THREE.LineSegments(edges, lineMaterial);

    return wireframeCube;
}

export function createSphere(color, radius = 0.2) {
    const geometry = new THREE.SphereGeometry(radius, 32, 16);
    // Gunakan MeshStandardMaterial agar bisa menerima cahaya
    const material = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.5,
        metalness: 0.1
    });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
}