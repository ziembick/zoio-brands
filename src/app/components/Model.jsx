'use client'

import {
  MeshTransmissionMaterial,
  OrbitControls,
  Text,
  TrackballControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/three";
import { motion } from 'framer-motion'

export default function Model() {
  const mesh = useRef();
  const { nodes } = useGLTF("/medias/Curve.glb");
  const { viewport, size } = useThree(); // tentar utilizar depois

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.0013;
    }
  });

  const { scale } = useSpring({
    from: { scale: 2 },
    to: { scale: 4 },
    config: { duration: 1000 },
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
      <Text position={[0, 0, -0.5]} fontSize={0.75} color="white" font="fonts/Mersad-Bold.otf">
        TRANSFORME
      </Text>
      
      <animated.mesh ref={mesh} {...nodes.Curve} position={[0, 0, 0]} color="green" scale={scale}>
        <MeshTransmissionMaterial {...materialProps} />
      </animated.mesh>
    </group>
  );
}
