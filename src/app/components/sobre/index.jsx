"use client";

import React, { useEffect, useRef } from "react";
import styles from "./sobre.module.sass";
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

export default function Sobre() {
  const triggerRef = useRef(null);
  const h1Ref = useRef(null);
  // const h6Ref = useRef(null);

  useEffect(() => {
    const h1Spans = h1Ref.current.querySelectorAll("span");
    // const h6Spans = h6Ref.current.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    // [h1Spans, h6Spans].forEach((spans, index) => {
    [h1Spans].forEach((spans, index) => {
      const delay = index * 1.2;
      tl.to(
        spans,
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "cubic-text",
          stagger: 0.1,
          scrub: 1,
        },
        delay
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="bg-black">
      <div className={`${styles.spacing_small}`}></div>
      <div ref={triggerRef} className={`${styles.mainContainer} bg-black`}>
        <h1 ref={h1Ref} className={`${styles.textos} ${styles.aga1} py-5`}>
          {`Criando marcas e transformando a sua visão sobre design através de estratégia`
            .split(" ")
            .map((word, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <span className="inline-block translate-y-full opacity-0">
                  {word}&nbsp;
                </span>
              </span>
            ))}
        </h1>
        {/* <h6 ref={h6Ref} className={`${styles.textos} ${styles.aga6} pb-5`}> */}

        <motion.h4
          className={`${styles.textos} ${styles.aga6} ${styles.container}pb-5`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            delay: 0.1,
          }}
        >
          Desenvolvemos identidades visuais que não apenas representam a
          essência de cada marca, mas que também inspirem novas percepções e
          conexões. Através de estratégias e um olhar atento aos detalhes,
          transformamos visões em realidades visuais impactantes. Queremos que
          cada marca que tocamos seja vista, sentida e transformada,
          proporcionando experiências únicas e memoráveis.
        </motion.h4>
      </div>
    </div>
  );
}
