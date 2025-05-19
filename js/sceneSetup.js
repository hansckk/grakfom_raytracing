// js/sceneSetup.js
import * as THREE from 'three';

export function initSceneAndCamera() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Latar belakang hitam

    const camera = new THREE.PerspectiveCamera(
        75, // Field of View
        window.innerWidth / window.innerHeight, // Aspect Ratio
        0.1, // Near clipping plane
        1000 // Far clipping plane
    );
    return { scene, camera };
}

export function initRenderer(container) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    return renderer;
}