import React, { useEffect, useRef } from "react";
import styles from "./zoioVideo.module.sass";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoioVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current.querySelector('video');

    gsap.fromTo(
      videoElement,
      { scale: 0.01 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: videoElement,
          start: "top right",
          end: "bottom center",
          scrub: 1,
          onEnter: () => videoElement.play(),
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className={`${styles.videoContainer}`} ref={videoRef}>
        <video
          src="/videos/zoiovideo.mp4"
          controls
          autoPlay
          muted
          loop
          className={`${styles.video}`}
        />
      </div>
    </div>
  );
}
