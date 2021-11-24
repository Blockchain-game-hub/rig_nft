import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Camera } from "three";

export const CubeComp = () => {
  const mountRef = useRef(null);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  useEffect(() => {
    // when window resizes, re-render scaling of renderer canvas.
    let onWindowResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize, false);

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);

    let boxGeo = new THREE.BoxGeometry(1, 1, 1);
    let boxMat = new THREE.MeshBasicMaterial({ color: "red" });
    let cube = new THREE.Mesh(boxGeo, boxMat);
    scene.add(cube);

    let animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 1;
      renderer.render(scene, camera);
    };
    animate();

    // attaches to our div
    mountRef.current.appendChild(renderer.domElement);
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);
  return <div ref={mountRef}></div>;
};
