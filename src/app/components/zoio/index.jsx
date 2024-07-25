import React from "react";
import Video from "next-video";
import styles from "./zoioVideo.module.sass";

export default function ZoioVideo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className={`${styles.videoContainer} w-full h-full`}>
      {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/WTHtaM3DJC0?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={styles.video}
        ></iframe> */}
        <Video
          src="/videos/zoioMux.mp4"
          // autoPlay
          controls
          loop
          className={`${styles.video}`}
        />
      </div>
    </div>
  );
}
