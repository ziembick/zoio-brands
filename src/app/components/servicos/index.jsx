"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./servicos.module.sass";

export default function Servicos() {
  const path = useRef(null);
  const [visibleDetails, setVisibleDetails] = useState(null);
  let progress = 0;
  let time = Math.PI / 2;
  let reqId = null;
  let x = 0.5;

  useEffect(() => {
    setPath(progress);
  }, [progress]);

  const setPath = (progress) => {
    const { innerWidth } = window;
    const width = innerWidth * 1;
    path.current.setAttributeNS(
      "",
      "d",
      `M0 50 Q${width * x} ${50 + progress}, ${width} 50`
    );
  };

  const manageMouseEnter = () => {
    if (reqId) {
      window.cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const { left, width } = path.current.getBoundingClientRect();
    x = (clientX - left) / width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.025);

    if (Math.abs(progress) > 0.75) {
      reqId = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  const handleMouseEnter = (index) => {
    setVisibleDetails(index);
  };

  const handleMouseLeaveDetails = () => {
    setVisibleDetails(null);
  };

  const detailsVariants = {
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
    hidden: { opacity: 0, height: 0, transition: { duration: 0.5 } },
  };

  const detailsContent = [
    [
      "Custom Shopify Themes Estratégia",
      "Headless Shopify Estratégia",
      "Custom Estratégia",
    ],
    [
      "Custom Shopify Themes Design",
      "Headless Shopify Design",
      "Custom Design",
    ],
    [
      "Custom Shopify Themes Development",
      "Headless Shopify Development",
      "Custom Development",
    ],
  ];

  return (
    <div className="text-white">
      <h1 className={`${styles.mainTitle} px-10 pb-10 text-8xl`}>Serviços</h1>
      <div className={`${styles.line}`}>
        <div
          onMouseEnter={manageMouseEnter}
          onMouseMove={manageMouseMove}
          onMouseLeave={manageMouseLeave}
          className={`${styles.box} px-10`}
        ></div>
        <svg className={`${styles.svg} px-10`}>
          <path ref={path} className={`${styles.path}`}></path>
        </svg>
      </div>
      <div className={`${styles.containerTudoMeu} px-10`}>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="cursor-pointer">
            <div
              className={`${styles[`textContainer${item}`]}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeaveDetails}
            >
              <h1 className={`${styles.number} text-4xl`}>0{item}</h1>
              <h2 className={`${styles.title} text-4xl`}>
                {item === 1
                  ? "Estratégia"
                  : item === 2
                  ? "Design"
                  : "Development"}
              </h2>
              <p className={`${styles.text} w-4/5`}>
                {item === 1
                  ? "We are a strategy-driven studio. We utilize data, industry experience and instinct to create branded experiences that."
                  : item === 2
                  ? "Design is at the very core of everything we do. We balance form, function and feeling to develop brands in the digital space."
                  : "We develop websites and apps with user experience, modern technology and business strategy in mind"}
              </p>
            </div>
            <motion.div
              className={`${styles.detailsContainer} py-10 pb-10 flex justify-start flex-col text-center`}
              initial="hidden"
              animate={visibleDetails === index ? "visible" : "hidden"}
              variants={detailsVariants}
            >
              {detailsContent[index].map((detail, detailIndex) => (
                <p key={detailIndex} className={`${styles.details} pb-1`}>
                  {detail}
                </p>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
