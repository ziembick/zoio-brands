import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col justify-center items-center">
        <h1>TEXTO</h1>
      <div className="w-full h-full flex justify-center items-center">
        <Scene />
      </div>
    </main>
  );
}
