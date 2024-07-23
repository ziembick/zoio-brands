import React from "react";

export default function Hover({ children }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden text-2xl uppercase leading-6 text-white">
      <h1 className="mt-3 inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </h1>
      <h1 className="mt-6 absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </h1>
    </div>
  );
}
