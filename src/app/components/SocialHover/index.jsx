import React from "react";
import styles from "./social.module.sass";

export default function SocialHover({ children }) {
  return (
    <div
      className={`${styles.primeiro} group relative cursor-pointer overflow-hidden text-2xl leading-6 text-white`}
    >
      <h1 className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </h1>
      <h1
        className={`${styles.segundo} mt-1 absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0`}
      >
        {children}
      </h1>
    </div>
  );
}
