'use client'

import React, { useState } from "react";
import styles from "./galeria.module.sass"
import Galerias from "../components/galerias"
import Modal from "../components/modal"
import Navbar from "../components/navbar";

export default function Galeria() {
  const galeria = [
    {
      title: "Benyma",
      src: "capabenyma.png",
      color: "#000000",
      href: "/benyma",
      iden: "Teste 1"
    },
    {
      title: "Quanty",
      src: "Quant.png",
      color: "#000000",
      href: "/quanty",
      iden: "Teste 2"
    },
    {
      title: "Benyma",
      src: "capabenyma.png",
      color: "#000000",
      href: "/benyma",
      iden: "Teste 3"
    },
    {
      title: "Quanty",
      src: "Quant.png",
      color: "#000000",
      href: "/quanty",
      iden: "Teste 4"
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
    <Navbar/>
    <div className="bg-black mt-20">
      <div className={`${styles.body}`}>
        {
          galeria.map((item, index) => { 
            return <Galerias key={index} index={index} title={item.title} iden={item.iden} setModal={setModal} href={item.href}/>
          })
        }
      </div>
      <Modal modal={modal} galeria={galeria}/>
    </div>
    </>
  );
}
