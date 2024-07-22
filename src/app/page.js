"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import Sobre from "./components/sobre";
import Footer from "./components/footer";
import Card from "./components/Card";
import ZoioVideo from "./components/zoio";
import Servicos from "./components/servicos";
import ShowProjects from "./components/ShowProjects";
import Transition from "./components/transition";
import styles from "./page.module.sass";
import { projetos } from "../app/data";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

import Titulo from "./components/titulo"

const Scene = dynamic(() => import("./components/Scene"), {
  ssr: false,
});
export default function Home({ router }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-black">
      <Navbar />
      <AnimatePresence mode="wait">
        <Scene />
        <Sobre />
        <ZoioVideo />
        <div className={styles.main} ref={container}>
          {projetos.map((projeto, i) => {
            const targetScale = 1 - (projetos.length - i) * 0.05;
            return (
              <Card
                key={i}
                {...projeto}
                progress={scrollYProgress}
                i={i}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
        <ShowProjects />
      <Titulo>TESTE</Titulo>
        <Servicos />
      </AnimatePresence>
      <Footer />
    </main>
  );
}
