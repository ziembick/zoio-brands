"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { CustomEase } from "gsap/dist/CustomEase";
import Link from "next/link";
import styles from './showprojects.module.sass'

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

export default function ShowProjects() {
  const heroInfiniteRef = useRef(null);

  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });

    tl.to(
      heroInfiniteRef?.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      1.2
    );

    return () => {};
  }, []);

  return (
    <div className={`${styles.mainDiv} flex justify-center`}>
      <div
        ref={heroInfiniteRef}
        className="text-white absolute bottom-[-25vw] left-[35%] ml-10 -mr-10 h-8  w-40 overflow-hidden rounded-full border border-white text-xs font-normal uppercase  opacity-0  lg:relative lg:left-8 lg:bottom-3 lg:right-[1vw] lg:h-14 lg:w-[16vw] lg:text-xl  lg:leading-10 "
      >
        <Link href="/galeria">
          <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
            <span className="group-hover:pause animate-loopL">
            &nbsp;Ver mais projetos
            </span>
            <span className="group-hover:pause animate-loopL">
            &nbsp;Ver mais projetos
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
