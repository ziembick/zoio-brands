"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import { Environment, OrbitControls, Text } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        style={{ backgroundColor: "black" }}
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
      >

        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset="city" />
        <Model position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
