import React from "react";
import logoImage from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";

import NavLink from "./nav-link";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImage} priority />
        NextLavel Food
      </Link>
<<<<<<< HEAD

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}> Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}> Foodies Community</NavLink>
=======
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink prefix={"/meals"}> Browse Meals</NavLink>
          </li>
          <li>
            <NavLink prefix={"/community"}> Foodies Community</NavLink>
>>>>>>> 7de4658aa591055963155418245c2892eafb4f5d
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
