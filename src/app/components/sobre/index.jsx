"use client";

import React, { useEffect, useRef } from "react";
import styles from "./sobre.module.sass";
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create("cubic-text-slow", "0.42, 0, 0.58, 1");

export default function Sobre() {
  const triggerRef = useRef(null);
  const h1Ref = useRef(null);
  const h6Ref = useRef(null);

  useEffect(() => {
    const h1Spans = h1Ref.current.querySelectorAll("span");

    const h1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom 80%",
        scrub: 1,
      },
      stagger: 1, 
    });

    h1Spans.forEach((span, index) => {
      h1Timeline.fromTo(
        span,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "cubic-text-slow",
        },
        index * 2.5 // Atraso individual para cada span
      );
    });

    const h6Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    h6Timeline.fromTo(
      h6Ref.current.querySelector("span"),
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "cubic-text-slow",
      },
      0
    );

    return () => {
      h1Timeline.kill();
      h6Timeline.kill();
    };
  }, []);

  return (
    <div className="bg-black">
      <div className={`${styles.spacing_small}`}></div>
      <div ref={triggerRef} className={`${styles.mainContainer} bg-black pt-[-40px]`}>
        <h1 ref={h1Ref} className={`${styles.textos} ${styles.aga1} pb-5`}>
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
        <h6 ref={h6Ref} className={`${styles.textos} ${styles.aga6} pb-5`}>
          <span className="inline-block translate-y-full opacity-0">
            Desenvolvemos identidades visuais que não apenas representam a
            essência de cada marca, mas que também inspirem novas percepções e
            conexões. Através de estratégias e um olhar atento aos detalhes,
            transformamos visões em realidades visuais impactantes. Queremos que
            cada marca que tocamos seja vista, sentida e transformada,
            proporcionando experiências únicas e memoráveis.
          </span>
        </h6>
      </div>
    </div>
  );
}
