"use client";
import React, { useEffect, useRef } from "react";
import styles from "./servicos.module.sass";

export default function Servicos() {
  const path = useRef(null);
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
    if(reqId){
        window.cancelAnimationFrame(reqId)
        resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const { left, width } = path.current.getBoundingClientRect()
    x = (clientX - left) / width
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

  return (
    <div className="text-white">
      <h1 className={`${styles.mainTitle} px-10 pb-10 text-8xl`}>Servicos</h1>
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
      <div className={`${styles.container} px-10`}>
        <div>
          <h1 className={`${styles.number} text-4xl`}>01</h1>
          <h2 className={`${styles.title} text-4xl`}>Estratégia</h2>
          <p className={`${styles.text} w-4/5`}>
            We are a strategy-driven studio. We utilize data, industry
            experience and instinct to create branded experiences that.
          </p>
          <div className={`${styles.detailsContainer} py-10`}>
            <p className={`${styles.details} pb-1`}>Custom Shopify Themes</p>
            <p className={`${styles.details} pb-1`}>Headless Shopify</p>
            <p className={`${styles.details} pb-1`}>Custom</p>
          </div>
        </div>
        <div>
          <h1 className={`${styles.number} text-4xl`}>02</h1>
          <h2 className={`${styles.title} text-4xl`}>Design</h2>
          <p className={`${styles.text} w-4/5`}>
            Design is at the very core of everything we do. We balance form,
            function and feeling to develop brands in the digital space.
          </p>
          <div className={`${styles.detailsContainer} py-10`}>
            <p className={`${styles.details} pb-1`}>Custom Shopify Themes</p>
            <p className={`${styles.details} pb-1`}>Headless Shopify</p>
            <p className={`${styles.details} pb-1`}>Custom</p>
          </div>
        </div>
        <div>
          <h1 className={`${styles.number} text-4xl`}>03</h1>
          <h2 className={`${styles.title} text-4xl`}>Development</h2>
          <p className={`${styles.text} w-4/5`}>
            We develop websites and apps with user experience, modern technology
            and business strategy in mind
          </p>
          <div className={`${styles.detailsContainer} py-10`}>
            <p className={`${styles.details} pb-1`}>Custom Shopify Themes</p>
            <p className={`${styles.details} pb-1`}>Headless Shopify</p>
            <p className={`${styles.details} pb-1`}>Custom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
