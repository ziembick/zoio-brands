"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavItem from "./nav-item";
import styles from "./navbar.module.sass";


const NAV_ITEMS = [
  {
    type: "link",
    label: "Projetos",
    href: "/galeria",
  },
  {
    type: "image",
    src: "/medias/ZoioLogo.svg",
    alt: "Zoio Logo",
    width: 100,
    height: 100,
    href: "/",
  },
  {
    type: "link",
    label: "Contato",
    href: "/contato",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${styles.navItems} ${isScrolled ? styles.scrolled : ""}`}
    >

      <nav
        className={`flex justify-between items-center h-full px-4 sm:px-10 ${styles.desktopNav}`}
      >
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
                    className={`inline-block ${styles.imagemZoio}`}
                  />
                </Link>
              </div>
            );
          } else if (item.type === "link") {
            return (
              <NavItem
                {...item}
                key={item.label}
                className={`${styles.desktopNav} ${
                  item.label === "Projetos" ? "mr-auto" : "ml-auto"
                }`}
              />
            );
          }
        })}
      </nav>
      <button className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>
      {menuOpen && (
        <nav className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      )}
    </header>
  );
}
