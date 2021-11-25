import { useEffect, useRef, useState } from "react";
import {
  Canvas,
  ReactThreeFiber,
  ThreeEvent,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import * as THREE from "three";
import {
  Html,
  MeshWobbleMaterial,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { MeshNormalMaterial, VideoTexture } from "three";
import { HtmlProps } from "@react-three/drei/web/Html";

const CubeMesh = () => {
  const [isVisible, setVisible] = useState(false);
  const { active, progress, errors, loaded } = useProgress();
  return (
    <mesh rotation={[1, 0.75, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshPhongMaterial wireframe />
      <Html distanceFactor={4.2} transform position={[0, 0, 1.52]}>
        <button className="rounded bg-indigo-700 text-4xl w-72 h-72 px-2 py-2 hover:bg-indigo-900">
          play now!
        </button>
      </Html>
      <Html
        transform
        distanceFactor={4.2}
        rotation={new THREE.Euler(0, 0.5 * Math.PI, 0)}
        position={[1.52, 0, 0]}
      >
        <button className="bg-black text-4xl w-72 h-72 px-2 py-2 hover:bg-indigo-900">
          About
        </button>
      </Html>
    </mesh>
  );
};

export const CubeComp = () => {
  return (
    <div className="canvas-container h-screen overflow-hidden bg-white w-full fixed">
      <Canvas mode={"concurrent"} camera={{ fov: 75 }}>
        <OrbitControls enableZoom={false}></OrbitControls>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 2, 2]} intensity={1} />
        <CubeMesh />
      </Canvas>
    </div>
  );
};
