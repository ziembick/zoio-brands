import React from "react";
import styles from "./content.module.sass";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Content() {
  return (
    <div
      className={`h-screen text-white flex justify-between items-center px-10 relative`}
    >
      {/* Conteúdo principal */}
      <div className={`relative z-10 w-full flex justify-between items-center px-10`}>
        <div className={`${styles.textContainer} flex justify-start flex-col`}>
          <h1 className={`${styles.mainText} text-7xl font-bold`}>VEJA,</h1>
          <h1 className={`${styles.mainText} text-7xl font-bold`}>SINTA,</h1>
          <h1 className={`${styles.mainText} text-7xl font-bold`}>TRANSFORME</h1>
        </div>
        <div className={`${styles.secondContainer}`}>
          <p className="text-4xl">zoio@zoiobrands.com.br</p>
          <div className="flex flex-col items-start mt-10">
            <Link
              href="https://instagram.com"
              className="text-2xl mt-2 hover:underline flex justify-center items-center"
            >
              Instagram
              <MdArrowOutward size={20} className="text-white ml-2" />
            </Link>
            <Link
              href="https://behance.net"
              className="text-2xl mt-2 hover:underline flex justify-center items-center"
            >
              Behance
              <MdArrowOutward size={20} className="text-white ml-2" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-2xl mt-2 hover:underline flex justify-center items-center"
            >
              LinkedIn
              <MdArrowOutward size={20} className="text-white ml-2" />
            </Link>
          </div>
          <div className="pt-10">
            <p className="text-right">Zoio Brands - Estúdio © 2024</p>
          </div>
        </div>
      </div>

      {/* Contêiner da Imagem de Fundo com h-1/2 */}
      <div
        className={`${styles.container} absolute bottom-0 left-0 w-full h-1/2`}
      ></div>
    </div>
  );
}


// const Section1 = () => {
//     return (
//         <div>
//             <Nav />
//         </div>
//     )
// }

// const Section2 = () => {
//     return (
//         <div className='flex justify-between items-end'>
//             <h1 className='text-[14vw] leading-[0.8] mt-10'>Sticky Footer</h1>
//             <p>©copyright</p>
//         </div>
//     )
// }

// const Nav = () => {
//     return (
//         <div className='flex shrink-0 gap-20'>
//             <div className='flex flex-col gap-2'>
//                 <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
//                 <p>Home</p>
//                 <p>Projects</p>
//                 <p>Our Mission</p>
//                 <p>Contact Us</p>
//             </div>
//             <div className='flex flex-col gap-2'>
//                 <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>
//                 <p>News</p>
//                 <p>Learn</p>
//                 <p>Certification</p>
//                 <p>Publications</p>
//             </div>
//         </div>
//     )
// }
