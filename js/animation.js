// js/animation.js
export function startAnimationLoop(renderer, scene, camera, objectsToAnimate) {
    function animate() {
        requestAnimationFrame(animate);

        objectsToAnimate.forEach(object => {
            if (object) { // Pastikan objek ada
                object.rotation.x += 0.005;
                object.rotation.y += 0.007;
            }
        });

        renderer.render(scene, camera);
    }
    animate(); // Mulai loop
}