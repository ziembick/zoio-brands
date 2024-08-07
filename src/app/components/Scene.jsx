"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Model from "./Model";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import styles from "./model.module.css";

export default function Scene() {
  return (
    <div
      className={`${styles.principal} w-full h-screen flex items-center justify-center`}
    >
      <Canvas
        style={{ backgroundColor: "black" }}
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
        className=""
      >
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset="city" />
        <Model position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
