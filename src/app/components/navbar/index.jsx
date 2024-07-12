import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItem from "./nav-item";

const NAV_ITEMS = [
  {
    type: "link",
    label: "Projetos",
    href: "/projetos",
  },
  {
    type: "image",
    src: "/medias/ZoioLogo.svg",
    alt: "Zoio Logo",
    width: 120,
    height: 120,
    href: "/",
  },
  {
    type: "link",
    label: "Contato",
    href: "/contato",
  },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 w-full z-10 h-24">
      <nav className="flex justify-between items-center h-full px-4 sm:px-10">
        {NAV_ITEMS.map((item) => {
          if (item.type === "image") {
            return (
              <div key={item.src} className="flex-1 text-center">
                <Link href={item.href}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="inline-block"
                  />
                </Link>
              </div>
            );
          } else if (item.type === "link") {
            return (
              <NavItem {...item} key={item.label} className={item.label === "Projetos" ? "mr-auto" : "ml-auto"} />
            );
          }
        })}
      </nav>
    </header>
  );
}
