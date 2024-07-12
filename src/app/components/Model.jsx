import {
  MeshTransmissionMaterial,
  OrbitControls,
  Text,
  TrackballControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";

export default function Model() {
  const mesh = useRef();
  const { nodes } = useGLTF("/medias/Curve.glb");
  const { viewport } = useThree(); // tentar utilizar depois

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.005;
    }
  });

  const materialProps = useControls({
    thickness: { value: 1.25, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.99, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group>
      <Text position={[0, 0, -0.5]} fontSize={0.75} color="white">
        TRANSFORME
      </Text>
      
      <mesh ref={mesh} {...nodes.Curve} position={[0, 0, 0]} color="green">
        <MeshTransmissionMaterial {...materialProps} />
      <OrbitControls />
      </mesh>
    </group>
  );
}
