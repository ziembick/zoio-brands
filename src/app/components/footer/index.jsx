import React from "react";
import Content from "../content";

export default function Footer() {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="sticky h-[800px] top-[calc(100vh-800px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}
