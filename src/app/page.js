import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import Sobre from "./components/sobre";
import Footer from "./components/footer";
import Projetos from "./components/ProjetosDestaque";



const Scene = dynamic(() => import("./components/Scene"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Scene />
      <Sobre />
      <Projetos />
      <Footer />
    </main>
  );
}
