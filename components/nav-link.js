"use client";
import React from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
      {children}
    </Link>
  );
}

export default NavLink;
