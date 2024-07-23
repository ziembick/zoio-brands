"use client";

import { useState } from "react";
import styles from "./description.module.sass";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Description({ mousePosition, projects }) {
  const [index, setIndex] = useState(0);
  const { x, y } = mousePosition;

  return (
    <div className={styles.description}>
      <h1 className="text-black">AQUI ESTÁ SOBRE O PROJETOS</h1>
      <div className={`${styles.descriptionContainer} px-10 `}>
        {projects.map(({ zoio }, i) => {
          return (
            <p
              className={styles.spacing}
              onMouseOver={() => {
                setIndex(i);
              }}
              key={`p${i}`}
            >
              {zoio}
            </p>
          );
        })}
      </div>
      <motion.div className={styles.vignette} style={{ x, y }}>
        <Image
          src={`/images/${projects[index].handle}/about.jpg`}
          alt="image"
          fill
        />
      </motion.div>
      <div>
        <h1 className="text-white">DESCRIOTION AQUI PRA BAIXO</h1>
      </div>
    </div>
  );
}
