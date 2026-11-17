"use client";
import React from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
<<<<<<< HEAD
function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
=======
function NavLink({ prefix, children }) {
  const path = usePathname();
  return (
    <Link href={prefix} className={path.startsWith(prefix) ? `${classes.active} ${classes.link}` : `${classes.link}`}>
>>>>>>> 7de4658aa591055963155418245c2892eafb4f5d
      {children}
    </Link>
  );
}

export default NavLink;
