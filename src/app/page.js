"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import Sobre from "./components/sobre";
import Footer from "./components/footer";
import Card from "./components/Card";
import ZoioVideo from "./components/zoio";
import Cursor from "./components/cursor";
import Servicos from "./components/servicos";
import ShowProjects from "./components/ShowProjects";
import Paragraph from "./components/paragraph";
import styles from "./page.module.sass";
import { projetos } from "../app/data";
import { AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useRef, Suspense, lazy, useState } from "react";
import Lenis from "lenis";

const Scene = lazy(() => import("./components/Scene")); // Carregamento dinâmico com Suspense
const Loader = lazy(() => import("./components/Loader")); // Carregamento dinâmico do Loader

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Simulate a 3-second delay before setting isLoading to false
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the timeout value for your desired delay

    return () => lenis.destroy(); // Cleanup on component unmount
  }, []);

  const paragraph = "PROJETOS EM DESTAQUE";

  return (
    <main className="bg-black">
      {/* <Cursor /> */}
      {isLoading ? ( // Conditionally render Loader or content
        <Suspense fallback={<Loader />}>
          <Loader /> {/* Your custom Loader component */}
        </Suspense>
      ) : (
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Scene />
          <Sobre />
          <ZoioVideo />
          <div className={styles.main} ref={container}>
            <div
              className={`${styles.destaque} text-white flex justify-center items-center text-5xl`}
            >
              <Paragraph value={paragraph} />
            </div>
            {projetos.map((projeto, i) => {
              const targetScale = 1 - (projetos.length - i) * 0.05;
              return (
                <Card
                  key={i}
                  {...projeto}
                  progress={scrollYProgress}
                  i={i}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
          <ShowProjects />
          {/* <Titulo>TESTE</Titulo> */}
          <Servicos />
          <Footer />
        </Suspense>
      )}
    </main>
  );
}



// "use client";

// import dynamic from "next/dynamic";
// import Navbar from "./components/navbar";
// import Sobre from "./components/sobre";
// import Footer from "./components/footer";
// import Card from "./components/Card";
// import ZoioVideo from "./components/zoio";
// import Cursor from "./components/cursor";
// import Servicos from "./components/servicos";
// import ShowProjects from "./components/ShowProjects";
// import Paragraph from "./components/paragraph";
// import styles from "./page.module.sass";
// import { projetos } from "../app/data";
// import { AnimatePresence, useScroll } from "framer-motion";
// import { useEffect, useRef, Suspense, lazy } from "react";
// import Lenis from "lenis";

// const Scene = lazy(() => import("./components/Scene")); // Carregamento dinâmico com Suspense
// const Loader = lazy(() => import("./components/Loader")); // Carregamento dinâmico do Loader

// export default function Home() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const lenis = new Lenis();

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//   }, []);

//   const paragraph = "PROJETOS EM DESTAQUE";

//   return (
//     <main className="bg-black">
//       {/* <Cursor /> */}
//       <Suspense fallback={<Loader />}>
//         <Navbar />
//         <Scene />
//         <Sobre />
//         <ZoioVideo />
//         <div className={styles.main} ref={container}>
//           <div
//             className={`${styles.destaque} text-white flex justify-center items-center text-5xl`}
//           >
//             <Paragraph value={paragraph} />
//           </div>
//           {projetos.map((projeto, i) => {
//             const targetScale = 1 - (projetos.length - i) * 0.05;
//             return (
//               <Card
//                 key={i}
//                 {...projeto}
//                 progress={scrollYProgress}
//                 i={i}
//                 range={[i * 0.25, 1]}
//                 targetScale={targetScale}
//               />
//             );
//           })}
//         </div>
//         <ShowProjects />
//         {/* <Titulo>TESTE</Titulo> */}
//         <Servicos />
//         <Footer />
//       </Suspense>
//     </main>
//   );
// }
