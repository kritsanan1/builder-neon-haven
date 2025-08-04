import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface DataPoint {
  x: number;
  y: number;
  z: number;
  value: number;
  color: string;
  label: string;
}

interface ThreeVisualizationProps {
  data: DataPoint[];
  width?: number;
  height?: number;
}

function DataVisualization({ data }: { data: DataPoint[] }) {
  const meshRef = useRef<THREE.Group>();
  const [hovered, setHovered] = useState<number | null>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      {data.map((point, index) => (
        <group key={index} position={[point.x, point.y, point.z]}>
          <Sphere
            args={[point.value * 0.02 + 0.1, 16, 16]}
            onPointerOver={() => setHovered(index)}
            onPointerOut={() => setHovered(null)}
          >
            <meshStandardMaterial
              color={point.color}
              emissive={hovered === index ? point.color : '#000000'}
              emissiveIntensity={hovered === index ? 0.3 : 0}
              transparent
              opacity={0.8}
            />
          </Sphere>
          {hovered === index && (
            <Text
              position={[0, point.value * 0.02 + 0.3, 0]}
              fontSize={0.2}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {point.label}: {point.value}
            </Text>
          )}
        </group>
      ))}
      
      {/* Grid lines */}
      <gridHelper args={[10, 10, '#444444', '#444444']} position={[0, -2, 0]} />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
    </group>
  );
}

export function ThreeVisualization({ data, width = 400, height = 300 }: ThreeVisualizationProps) {
  return (
    <div style={{ width, height }} className="rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          maxDistance={15}
          minDistance={3}
        />
        <DataVisualization data={data} />
      </Canvas>
    </div>
  );
}

// Performance metrics 3D chart
interface PerformanceData {
  contentCreation: number;
  userEngagement: number;
  aiProcessing: number;
  renderQueue: number;
}

function PerformanceBars({ data }: { data: PerformanceData }) {
  const groupRef = useRef<THREE.Group>();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const metrics = [
    { name: 'Content', value: data.contentCreation, color: '#06b6d4', x: -1.5 },
    { name: 'Engagement', value: data.userEngagement, color: '#ec4899', x: -0.5 },
    { name: 'AI Processing', value: data.aiProcessing, color: '#8b5cf6', x: 0.5 },
    { name: 'Render Queue', value: data.renderQueue, color: '#10b981', x: 1.5 }
  ];

  return (
    <group ref={groupRef}>
      {metrics.map((metric, index) => (
        <group key={index} position={[metric.x, 0, 0]}>
          <Box
            args={[0.4, metric.value / 50, 0.4]}
            position={[0, metric.value / 100, 0]}
          >
            <meshStandardMaterial
              color={metric.color}
              emissive={metric.color}
              emissiveIntensity={0.2}
            />
          </Box>
          <Text
            position={[0, -0.5, 0]}
            fontSize={0.15}
            color="white"
            anchorX="center"
            anchorY="middle"
            rotation={[-Math.PI / 2, 0, 0]}
          >
            {metric.name}
          </Text>
          <Text
            position={[0, metric.value / 50 + 0.3, 0]}
            fontSize={0.2}
            color={metric.color}
            anchorX="center"
            anchorY="middle"
          >
            {metric.value.toFixed(1)}%
          </Text>
        </group>
      ))}
      
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-5, 5, -5]} intensity={0.7} color="#06b6d4" />
    </group>
  );
}

export function Performance3D({ data, width = 400, height = 300 }: { data: PerformanceData; width?: number; height?: number }) {
  return (
    <div style={{ width, height }} className="rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [3, 3, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          maxDistance={8}
          minDistance={2}
        />
        <PerformanceBars data={data} />
      </Canvas>
    </div>
  );
}
