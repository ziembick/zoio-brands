import React from "react";
import styles from "./galerias.module.sass";
import Link from "next/link";


export default function Galerias({ index, title, setModal, href, iden }) {
  return (


    <Link href={href}>
      <div
        className={`${styles.project}`}
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
      >
        <h2 className={`${styles.projectTitle} text-white`}>{title}</h2>
        <p className={`${styles.projectText} text-white`}>
          {iden}
        </p>
      </div>
    </Link>

  );
}
