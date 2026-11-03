"use client";
import React from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
function NavLink({ prefix, children }) {
  const path = usePathname();
  return (
    <Link href={prefix} className={path.startsWith(prefix) ? `${classes.active} ${classes.link}` : `${classes.link}`}>
      {children}
    </Link>
  );
}

export default NavLink;
