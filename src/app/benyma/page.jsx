"use client";

import React, { useEffect, useState } from "react";
import styles from "./benyma.module.sass";
import Gallery from "../components/gallery";
import Description from "../components/description";
import Lenis from "lenis";
import { useSpring } from "framer-motion";
import Navbar from "../components/navbar";

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak",
    className: "dyal",
    zoio: "PT-BR",
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias",
    zoio: "Quant é um laboratório de pesquisa e desenvolvimento de ponta, fundado em 2023, com a missão de explorar e expandir os horizontes da computação quântica. Fundada por uma equipe de cientistas, engenheiros e inovadores tecnológicos, a Quant busca resolver problemas complexos através de soluções baseadas em tecnologias quânticas. Desde seu início, a Quant se estabeleceu como um líder no campo, combinando pesquisa científica de alta qualidade com desenvolvimento prático de software e hardware quântico.",
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers",
    zoio: "ENG"
  },
  {
    name: "Landon Speers",
    handle: "landon_speers",
    zoio: "Quant is a cutting-edge research and development laboratory founded in 2023 with the mission of exploring and expanding the horizons of quantum computing. Established by a team of scientists, engineers, and technological innovators, Quant aims to solve complex problems through solutions based on quantum technologies. Since its inception, Quant has established itself as a leader in the field, combining high-quality scientific research with practical development of quantum software and hardware."
  },
];

export default function Benyma() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <>
      <Navbar />
      <div onMouseMove={mouseMove} className={styles.main}>
        {projects.map(({ handle }, i) => {
          return (
            <Gallery mousePosition={mousePosition} handle={handle} key={i} />
          );
        })}
        <Description mousePosition={mousePosition} projects={projects} />
      </div>
    </>
  );
}
