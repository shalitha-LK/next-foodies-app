"use client";
import React from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
function NavLink() {
  const path = usePathname();
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/meals" className={path.startsWith("/meals") ? classes.active : undefined}>
            Browse Meals
          </Link>
        </li>
        <li>
          <Link href="/community" className={path.startsWith("/community") ? classes.active : undefined}>
            Foodies Community
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLink;
