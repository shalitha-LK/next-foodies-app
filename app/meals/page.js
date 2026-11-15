import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meal, created
          <span className={classes.highlight}></span>
        </h1>
        <p>Chose your faviourte recipe and cook it your self it is and fun.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Faviroute recipe</Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}

export default MealsPage;
