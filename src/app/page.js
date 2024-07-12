import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import Sobre from "./components/sobre";

const Scene = dynamic(() => import("@/app/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col justify-center items-center">
      <Navbar />

      <Scene />
      <Sobre />
    </main>
  );
}
