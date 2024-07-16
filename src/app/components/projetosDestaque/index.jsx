'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./projetos.module.sass";

const projetos = [
  {
    title: "Benyma",
    subtitle: "1",
    src: '/medias/capabenyma.png',
    alt: "Benyma"
  },
  {
    title: "Quanty",
    subtitle: "2",
    src: '/medias/Quant.png',
    alt: "Quanty"
  },
  {
    title: "Tentando",
    subtitle: "3",
    src: '/medias/capabenyma.png',
    alt: "Benyma"
  },
  {
    title: "Quase isso",
    subtitle: "4",
    src: '/medias/Quant.png',
    alt: "Quanty"
  },
  {
    title: "Vamos la",
    subtitle: "5",
    src: '/medias/capabenyma.png',
    alt: "Benyma"
  },
  {
    title: "Caramba",
    subtitle: "6",
    src: '/medias/Quant.png',
    alt: "Quanty"
  },
];

export default function Projetos() {
  const [projetoAtual, setProjetoAtual] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true); // Estado para controlar direção do scroll
  const [isChangingProject, setIsChangingProject] = useState(false); // Flag para controlar mudança de projeto

  useEffect(() => {
    const handleScroll = () => {
      if (!isChangingProject) {
        const currentScrollPosition = window.scrollY;

        // Define a direção do scroll
        setScrollingDown(currentScrollPosition > lastScrollPosition);

        // Atualiza o projeto atual baseado na direção do scroll
        if (scrollingDown && projetoAtual < projetos.length - 1) {
          setIsChangingProject(true); // Inicia mudança de projeto
          setProjetoAtual(projetoAtual + 1);
        } else if (!scrollingDown && projetoAtual > 0) {
          setIsChangingProject(true); // Inicia mudança de projeto
          setProjetoAtual(projetoAtual - 1);
        }

        setLastScrollPosition(currentScrollPosition);

        // Debounce para evitar múltiplas mudanças rápidas
        setTimeout(() => {
          setIsChangingProject(false); // Finaliza mudança de projeto após um tempo
        }, 500); // Ajuste o tempo conforme necessário
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [projetoAtual, lastScrollPosition, scrollingDown, isChangingProject]);


  return (
    <div className={styles.container}>
      {projetos.map((item, index) => (
        <div
          key={index}
          className={`${styles.projeto} ${index === projetoAtual ? styles.visible : styles.hidden}`}
        >
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{item.title}</h1>
            <span className={styles.subtitle}>{item.subtitle}</span>
            <h2 className={styles.projetosDestaque}>&#40;Projetos em destaque&#41;</h2>
          </div>
          <Image
            src={item.src}
            alt={item.alt}
            width={1000}
            height={500}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import styles from "./projetos.module.sass";

// const projetos = [
//   {
//     title: "Benyma",
//     subtitle: "1",
//     src: "/medias/capabenyma.png",
//     alt: "Benyma",
//   },
//   {
//     title: "Quanty",
//     subtitle: "2",
//     src: "/medias/Quant.png",
//     alt: "Quanty",
//   },
//   {
//     title: "Tentando",
//     subtitle: "3",
//     src: "/medias/capabenyma.png",
//     alt: "Benyma",
//   },
//   {
//     title: "Quase isso",
//     subtitle: "4",
//     src: "/medias/Quant.png",
//     alt: "Quanty",
//   },
//   {
//     title: "Vamos la",
//     subtitle: "5",
//     src: "/medias/capabenyma.png",
//     alt: "Benyma",
//   },
//   {
//     title: "Caramba",
//     subtitle: "6",
//     src: "/medias/Quant.png",
//     alt: "Quanty",
//   },
// ];

// export default function Projetos() {
//   return (
//     <div className={styles.container}>
//       {projetos.map((item, index) => (
//         <div key={index}>
//           <div className={styles.textContainer}>
//             <h1 className={styles.title}>{item.title}</h1>
//             <span className={styles.subtitle}>{item.subtitle}</span>
//             <h2 className={styles.projetosDestaque}>
//               &#40;Projetos em destaque&#41;
//             </h2>
//           </div>
//           <Image
//             src={item.src}
//             alt={item.alt}
//             width={1000}
//             height={500}
//             className={styles.image}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }