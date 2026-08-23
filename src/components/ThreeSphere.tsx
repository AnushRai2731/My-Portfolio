import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Hexagon, Cpu } from 'lucide-react';

const hasWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

const NeuralSphereInner = ({ hovered }: { hovered: boolean }) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerSolidRef = useRef<THREE.Mesh>(null);
  const outerSphereRef = useRef<THREE.Group>(null);

  // Geometry data
  const nodeCount = 250;
  const radius = 1.8;
  const maxDistance = 0.65;

  const { positions, linePositions } = useMemo(() => {
    const positions: number[] = [];
    const pointVectors: THREE.Vector3[] = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; 
      const radiusAtY = Math.sqrt(1 - y * y); 
      const theta = phi * i; 

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const vec = new THREE.Vector3(x * radius, y * radius, z * radius);
      pointVectors.push(vec);
      positions.push(vec.x, vec.y, vec.z);
    }

    const linePositions: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = pointVectors[i].distanceTo(pointVectors[j]);
        if (dist < maxDistance) {
          linePositions.push(
            pointVectors[i].x, pointVectors[i].y, pointVectors[i].z,
            pointVectors[j].x, pointVectors[j].y, pointVectors[j].z
          );
        }
      }
    }

    return {
      positions: new Float32Array(positions),
      linePositions: new Float32Array(linePositions),
    };
  }, [nodeCount, radius, maxDistance]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y = elapsedTime * 0.05;
      outerSphereRef.current.rotation.x = elapsedTime * 0.02;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y -= 0.006;
      coreRef.current.rotation.z += 0.003;
      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.12;
      coreRef.current.scale.setScalar(pulseScale);
    }
    if (innerSolidRef.current) {
      innerSolidRef.current.scale.setScalar(1 + Math.sin(elapsedTime * 3.0) * 0.18);
    }
  });

  return (
    <group>
      <group ref={outerSphereRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            color={hovered ? 0x00FDEE : 0x00D2FF}
            size={0.06}
            transparent
            opacity={hovered ? 1.0 : 0.8}
            sizeAttenuation
            toneMapped={false}
          />
        </points>

        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={linePositions.length / 3}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={0x00FDEE}
            transparent
            opacity={hovered ? 0.4 : 0.2}
            toneMapped={false}
          />
        </lineSegments>
      </group>

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.7, 2]} />
        <meshBasicMaterial
          color={0xC084FC}
          wireframe
          transparent
          opacity={0.6}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={innerSolidRef}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshBasicMaterial
          color={0xFF6B81}
          transparent
          opacity={0.8}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export const ThreeSphere: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setWebglSupported(hasWebGL());
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <div className="lg:col-span-5 relative rounded-3xl w-full overflow-hidden border border-white/15 bg-gradient-to-b from-[#0e172a]/80 to-[#080a14]/90 backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between items-center min-h-[480px] group h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00d2ff]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c084fc]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Card Header */}
      <div className="w-full flex items-center justify-between relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#00fdee] bg-[#00fdee]/10 border border-[#00fdee]/30 backdrop-blur-md">
          <Cpu className="w-3.5 h-3.5 text-[#00fdee] animate-pulse" />
          <span className="text-[10px] font-bold text-[#00fdee] tracking-wide">3D NEURAL SPHERE ENGINE</span>
        </div>
        <span className="text-[11px] font-semibold text-[#94A3B8] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          Interactive Mesh
        </span>
      </div>

      {/* 3D Canvas Canvas Container */}
      <div 
        className="relative w-full h-[340px] flex-1 flex items-center justify-center my-auto z-10 cursor-grab active:cursor-grabbing filter drop-shadow-[0_0_40px_rgba(0,253,238,0.35)]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {webglSupported ? (
          <Canvas
            camera={{ position: [0, 0, 5.5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          >
            <NeuralSphereInner hovered={hovered} />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableDamping={true}
              dampingFactor={0.05}
              autoRotate={!reducedMotion} 
              autoRotateSpeed={1.0}
            />
          </Canvas>
        ) : (
          <div className="text-[#94A3B8] font-mono text-xs text-center border border-white/[0.08] px-4 py-2 rounded bg-white/[0.02]">
            Interactive 3D preview unavailable.
          </div>
        )}
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="w-full grid grid-cols-3 gap-2 relative z-10 pt-3 border-t border-white/10">
        <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center backdrop-blur-md">
          <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Nodes</div>
          <div className="text-sm font-extrabold text-[#00d4ff]">250 Active</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center backdrop-blur-md">
          <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Topology</div>
          <div className="text-sm font-extrabold text-[#ec4899]">Fibonacci Web</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center backdrop-blur-md">
          <div className="text-[10px] uppercase font-bold text-[#94A3B8]">Core Glow</div>
          <div className="text-sm font-extrabold text-[#f43f5e]">Magenta Pulse</div>
        </div>
      </div>
    </div>
  );
};

