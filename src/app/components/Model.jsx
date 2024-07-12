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

  let materialProps = {};
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    materialProps = useControls({
      thickness: { value: 1.25, min: 0, max: 3, step: 0.05 },
      roughness: { value: 0, min: 0, max: 1, step: 0.1 },
      transmission: { value: 0.99, min: 0, max: 1, step: 0.1 },
      ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
      chromaticAberration: { value: 0.02, min: 0, max: 1 },
      backside: { value: true },
    });
  } else {
    // Valores padrão para produção
    materialProps = {
      thickness: 1.25,
      roughness: 0,
      transmission: 0.99,
      ior: 1.2,
      chromaticAberration: 0.02,
      backside: true,
    };
  }
  return (
    <group>
      <Text position={[0, 0, -0.5]} fontSize={0.75} color="white">
        TRANSFORME
      </Text>
      
      <mesh ref={mesh} {...nodes.Curve} position={[0, 0, 0]} color="green">
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
