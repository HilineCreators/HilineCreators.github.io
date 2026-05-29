import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const RotatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.15;
      wireRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    }
  });

  const geometry = new THREE.IcosahedronGeometry(2.2, 3);
  const edges = new THREE.EdgesGeometry(geometry);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group>
        <lineSegments ref={wireRef} geometry={edges}>
          <lineBasicMaterial color="#2e5bff" transparent opacity={0.35} />
        </lineSegments>
        <mesh ref={meshRef} geometry={geometry}>
          <meshBasicMaterial color="#2e5bff" transparent opacity={0.03} wireframe={false} />
        </mesh>
        {/* Inner glow sphere */}
        <mesh>
          <sphereGeometry args={[1.8, 32, 32]} />
          <meshBasicMaterial color="#2e5bff" transparent opacity={0.02} />
        </mesh>
        {/* Points at vertices */}
        <points geometry={geometry}>
          <pointsMaterial color="#ccff00" size={0.04} transparent opacity={0.8} sizeAttenuation />
        </points>
      </group>
    </Float>
  );
};

const WireframeSphere = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <RotatingSphere />
      </Canvas>
    </div>
  );
};

export default WireframeSphere;
