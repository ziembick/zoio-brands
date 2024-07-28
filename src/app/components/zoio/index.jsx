import React, { useEffect, useRef } from "react";
import Video from "next-video";
import styles from "./zoioVideo.module.sass";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoioVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

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
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className={`${styles.videoContainer} w-full h-full`} ref={videoRef}>
        <Video
          src="/videos/zoioMux.mp4"
          autoPlay
          controls
          loop
          className={`${styles.video}`}
        />
      </div>
    </div>
  );
}
