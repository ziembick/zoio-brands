"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Transition({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const container = useRef();

  useGSAP(() => {
    if (children.key !== displayChildren.key) {
      gsap.to(container.current, { opacity: 0 }).then(() => {
        setDisplayChildren(children);
        gsap.to(container.current, {opacity: 1})
      });
    }
  }, [children]);

  useGSAP(() => {
    gsap.to(container.current, {opacity: 1})
  })
  return <div ref={container}>{displayChildren}</div>;
}
