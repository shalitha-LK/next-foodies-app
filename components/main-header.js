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
      <NavLink />
    </header>
  );
}

export default MainHeader;
