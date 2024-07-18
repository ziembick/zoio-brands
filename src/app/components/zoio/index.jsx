
import React from "react";
import Video from "next-video";
import styles from './zoioVideo.module.sass'

export default function ZoioVideo() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-white mb-4 text-center">Video</h1>
      <div className={`${styles.videoContainer}w-full max-w-7xl`}>
        <Video
          src="/videos/zoioMux.mp4"
          autoPlay
          controls
          loop
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
