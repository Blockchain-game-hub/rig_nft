import { useEffect, useRef, useState } from "react";
import { Canvas, ReactThreeFiber, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html, OrbitControls } from "@react-three/drei";
import { MeshNormalMaterial } from "three";

const CubeMesh = () => {
  //   const meshRef = useRef<THREE.Mesh>(null);
  //   useFrame(() => {
  //     meshRef.current.rotation.y += 0.01 * 0.1;
  //   });

  const [isVisible, setIsVisible] = useState(false);

  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshNormalMaterial />
      <Html distanceFactor={10} transform onOcclude={() => setIsVisible}>
        <span className="rounded bg-indigo-700 w-24 px-2 py-2 ">play now!</span>
      </Html>
    </mesh>
  );
};

export const CubeComp = () => {
  return (
    <div className="canvas-container h-screen overflow-hidden bg-white w-full fixed">
      <Canvas camera={{ fov: 75 }}>
        <OrbitControls enableZoom={false}></OrbitControls>
        <ambientLight intensity={0.1} />
        <CubeMesh />
      </Canvas>
    </div>
  );
};
