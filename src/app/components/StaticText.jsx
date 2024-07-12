"use client";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

function StaticText() {
  return (
    <Canvas>
      <Text position={[0, 0, -0.5]} fontSize={0.75} color="white">
        TRANSFORME
        <OrbitControls enabled={false} />
      </Text>
    </Canvas>
  );
}

export default StaticText;
