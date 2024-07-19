'use client'

import React, { useEffect, useState } from "react";
import styles from "./benyma.module.sass";
import Gallery from "../components/gallery";
import Description from '../components/description'
import Lenis from "lenis";
import { useSpring } from "framer-motion";
import Navbar from "../components/navbar";

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak",
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias",
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers",
  },
  {
    name: "Landon Speers",
    handle: "landon_speers",
  },
];

export default function Benyma() {

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);


const mouseMove = (e) => {
  const {clientX, clientY} = e
  const targetX = clientX - (window.innerWidth / 2 * 0.25)
  const targetY = clientY - (window.innerWidth / 2 * 0.30)
  mousePosition.x.set(targetX)
  mousePosition.y.set(targetY)
}

  return (
    <>
    <Navbar />
    <div onMouseMove={mouseMove} className={styles.main}>
      {projects.map(({ handle }, i) => {
        return <Gallery mousePosition={mousePosition} handle={handle} key={i} />;
      })}
      <Description mousePosition={mousePosition} projects={projects}/>
    </div>
    </>
  );
}
