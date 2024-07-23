"use client";

import React, { useEffect, useRef } from "react";
import styles from "./paragraph.module.sass";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      className={`${styles.destaque} text-white flex justify-center items-center text-5xl`}
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={`${styles.word}`}>
      <span className={`${styles.shadow}`}>{children}</span>

      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
