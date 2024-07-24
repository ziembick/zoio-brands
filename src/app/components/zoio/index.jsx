import React from "react";
import Video from "next-video";
import styles from "./zoioVideo.module.sass";

export default function ZoioVideo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className={`${styles.videoContainer} w-full h-full`}>
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
