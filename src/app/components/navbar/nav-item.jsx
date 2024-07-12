'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavItem({label, href}) {
  const pathname = usePathname();
  const isActive = href && pathname === href;

  return <Link  href={href || "#"} className="text-white text-custom-1rem">{label}</Link>;
}
