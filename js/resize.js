// js/resize.js
export function setupResizeHandler(camera, renderer) {
    function onWindowResize() {
        const container = renderer.domElement.parentElement;
        if (container) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
    }
    window.addEventListener('resize', onWindowResize, false);
    // Panggil sekali untuk ukuran awal jika container sudah ada
    if (renderer.domElement.parentElement) {
        onWindowResize();
    }
}