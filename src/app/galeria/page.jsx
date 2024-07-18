'use client'

import React, { useState } from "react";
import styles from "./galeria.module.sass"
import Galerias from "../components/galerias"
import Modal from "../components/modal"

export default function Galeria() {
  const galeria = [
    {
      title: "Benyma",
      src: "capabenyma.png",
      color: "#000000",
      href: "/benyma"
    },
    {
      title: "Quanty",
      src: "Quant.png",
      color: "#000000",
      href: "/quanty"
    },
    {
      title: "Benyma",
      src: "capabenyma.png",
      color: "#000000",
      href: "/benyma"
    },
    {
      title: "Quanty",
      src: "Quant.png",
      color: "#000000",
      href: "/quanty"
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="bg-black">
      <div className={`${styles.body}`}>
        {
          galeria.map((item, index) => { 
            return <Galerias key={index} index={index} title={item.title} setModal={setModal} />
          })
        }
      </div>
      <Modal modal={modal} galeria={galeria}/>
    </div>
  );
}
