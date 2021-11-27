import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { MeshNormalMaterial, VideoTexture } from "three";
import { HtmlProps } from "@react-three/drei/web/Html";

const HTMLPages = () => {
  return (
    <>
      <Html
        draggable={true}
        occlude
        distanceFactor={4.2}
        transform
        position={[0, 0, 1.52]}
      >
        <div className="rounded bg-indigo-700 text-4xl w-72 h-72 px-2 py-2 hover:bg-indigo-900">
          Play Now!
        </div>
      </Html>
      <Html
        occlude
        transform
        distanceFactor={4.2}
        rotation={new THREE.Euler(0, 0.5 * Math.PI, 0)}
        position={[1.52, 0, 0]}
      >
        <div className="rounded bg-indigo-700 text-4xl w-72 h-72 px-2 py-2 hover:bg-indigo-900">
          About
        </div>
      </Html>
      <Html
        occlude
        transform
        distanceFactor={4.2}
        rotation={new THREE.Euler(0.5 * Math.PI, 1 * Math.PI, 1 * Math.PI)}
        position={[0, 1.52, 0]}
      >
        <div className="rounded bg-indigo-700 text-4xl w-72 h-72 px-2 py-2 hover:bg-indigo-900">
          RIG
        </div>
      </Html>
    </>
  );
};

const CubeMesh = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <mesh rotation={[1, 0.75, 0]}>
      {/* <boxGeometry args={[3, 3, 3]} /> */}
      <HTMLPages />
      <meshNormalMaterial wireframe />
    </mesh>
  );
};

export const CubeComp = () => {
  return (
    <div className="canvas-container h-screen overflow-hidden bg-white w-full fixed">
      <Canvas mode={"concurrent"} camera={{ fov: 75 }}>
        <OrbitControls autoRotate enableZoom={false}></OrbitControls>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 2, 2]} intensity={1} />
        <CubeMesh />
      </Canvas>
    </div>
  );
};
