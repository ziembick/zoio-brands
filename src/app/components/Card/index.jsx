"use client";

import React, { useRef } from "react";
import styles from "./card.module.sass";
import Image from "next/image";
import Hover from "../hover";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Card({
  title,
  subtitle,
  src,
  alt,
  color,
  i,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>

      <motion.div
        className={styles.card}
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-10% + ${i * 25}px)`,
        }}
      >
        <div>
          
          {/* <div className={styles.textContainer}>
            <Hover>
              <h1 className={styles.title}>{title}</h1>
            </Hover>

            <span className={`${styles.subtitle} mt-1`}>{subtitle}</span>

            <h2 className={styles.projetosDestaque}>
              &#40;Projetos em destaque&#41;
            </h2>
          </div> */}
          <div className={styles.imageContainer}>
            <motion.div style={{ imgScale }} className={styles.inner}>
              <Image
                src={src}
                alt={alt}
                width={1000}
                height={500}
                className={styles.image}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
