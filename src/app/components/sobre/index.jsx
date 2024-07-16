import React from "react"
import styles from "./sobre.module.sass"

export default function Sobre() {
  return (
    <div className="bg-black">
    <div className={`${styles.mainContainer} bg-black`}>
      <h1 className={`${styles.textos} ${styles.aga1} py-5`}>
        Criando marcas e transformando a sua visão sobre design através de
        estratégia
      </h1>
      <h6 className={`${styles.textos} ${styles.aga6} pb-5`}>
        Desenvolvemos identidades visuais que não apenas representam a essência
        de cada marca, mas que também inspirem novas parcepções e conexões.
        Através de estratégias e um olhar atento aos detalhes, transformamos
        visões em realidades visuais impactantes. Queremos que cada marca que
        tocamos seja vista, sentida e transformada, proporcionando experiências
        únicas e memoráveis.
      </h6>
    </div>
    </div>
  );
}
