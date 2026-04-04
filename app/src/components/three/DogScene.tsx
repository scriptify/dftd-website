"use client";

import { useRef, useMemo, useEffect, Suspense, createContext, useContext } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

// Shared scroll progress ref accessible inside the Canvas
const scrollRef = { current: 0 };
const ScrollContext = createContext(scrollRef);

// Pre-generate star positions outside of React to avoid Math.random in render
const STAR_POSITIONS = (() => {
  const count = 150;
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    arr[i] = (Math.random() - 0.5) * 40;
  }
  return arr;
})();

function DogModel({
  url,
  position,
  scale,
  rotationY = 0,
  floatSpeed = 1,
  color,
  parallaxSpeed = 1,
}: {
  url: string;
  position: [number, number, number];
  scale: number;
  rotationY?: number;
  floatSpeed?: number;
  color: string;
  parallaxSpeed?: number;
}) {
  const obj = useLoader(OBJLoader, url);
  const groupRef = useRef<THREE.Group>(null);
  const elapsedRef = useRef(0);

  const clonedObj = useMemo(() => {
    const clone = obj.clone();
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          metalness: 0.3,
          roughness: 0.6,
          emissive: new THREE.Color(color),
          emissiveIntensity: 0.15,
        });
      }
    });
    return clone;
  }, [obj, color]);

  const center = useMemo(() => {
    const box = new THREE.Box3().setFromObject(clonedObj);
    const c = new THREE.Vector3();
    box.getCenter(c);
    const size = new THREE.Vector3();
    box.getSize(size);
    return { center: c, maxDim: Math.max(size.x, size.y, size.z) };
  }, [clonedObj]);

  const normalizedScale = scale / center.maxDim;

  const scroll = useContext(ScrollContext);
  const basePosition = useRef(position);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    if (groupRef.current) {
      const s = scroll.current;
      // Parallax: each dog moves up at different speeds as user scrolls down
      groupRef.current.position.y = basePosition.current[1] + s * parallaxSpeed * 3;
      // Gentle tilt on scroll
      groupRef.current.rotation.x = s * parallaxSpeed * 0.3;
      // Idle rotation
      groupRef.current.rotation.y =
        rotationY + Math.sin(elapsedRef.current * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={position} scale={normalizedScale}>
        <group rotation={[-Math.PI / 2, 0, -(Math.PI / 4)]}>
          <primitive
            object={clonedObj}
            position={[-center.center.x, -center.center.y, -center.center.z]}
          />
        </group>
      </group>
    </Float>
  );
}

function StarField() {
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[STAR_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#ffffff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#06d6a0" />
      <directionalLight position={[-5, 3, -3]} intensity={0.5} color="#3a86ff" />
      <pointLight position={[0, -2, 3]} intensity={0.4} color="#ff006e" />
      <Suspense fallback={null}>
        {/* Left side - 2 dogs */}
        <DogModel
          url="/models/dog_1/10680_Dog_v2.obj"
          position={[-5, -1.5, 0]}
          scale={3}
          rotationY={Math.PI * 0.75}
          floatSpeed={1.2}
          color="#06d6a0"
          parallaxSpeed={1.2}
        />
        <DogModel
          url="/models/dog_2/13180_ConcreteDogStatue_v1_NEW.obj"
          position={[-3, 0, 1]}
          scale={2.2}
          rotationY={Math.PI * 0.65}
          floatSpeed={0.8}
          color="#3a86ff"
          parallaxSpeed={0.7}
        />

        {/* Right side - 1 dog */}
        <DogModel
          url="/models/dog_3/13180_ConcreteDogStatue_v1_NEW.obj"
          position={[4.5, -1, 0]}
          scale={2.8}
          rotationY={-Math.PI * 0.75}
          floatSpeed={1}
          color="#06d6a0"
          parallaxSpeed={1.0}
        />
      </Suspense>

      <StarField />
    </>
  );
}

export default function DogScene() {
  useEffect(() => {
    const onScroll = () => {
      // Normalize scroll: 0 at top, 1 at ~one viewport height
      scrollRef.current = window.scrollY / window.innerHeight;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
        gl={{ alpha: true, antialias: true, powerPreference: "default" }}
        dpr={[1, 2]}
      >
        <ScrollContext.Provider value={scrollRef}>
          <Scene />
        </ScrollContext.Provider>
      </Canvas>
    </div>
  );
}
