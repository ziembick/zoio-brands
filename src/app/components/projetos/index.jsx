"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./projetos.module.sass";
import { projetos } from "../../data";

export default function Projetos() {
  return (
    <div className={styles.container}>
      {projetos.map((item, index) => (
        <div key={index}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{item.title}</h1>
            <span className={styles.subtitle}>{item.subtitle}</span>
            <h2 className={styles.projetosDestaque}>
              &#40;Projetos em destaque&#41;
            </h2>
          </div>
          <Image
            src={item.src}
            alt={item.alt}
            width={1000}
            height={500}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
