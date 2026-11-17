import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
<<<<<<< HEAD
import MealdGrid from "@/components/meals/meals-grid";
=======
>>>>>>> 7de4658aa591055963155418245c2892eafb4f5d
function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
<<<<<<< HEAD
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your faviourite recipe.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealdGrid meals={[]} />
      </main>
=======
          Delicious meal, created
          <span className={classes.highlight}></span>
        </h1>
        <p>Chose your faviourte recipe and cook it your self it is and fun.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Faviroute recipe</Link>
        </p>
      </header>
      <main className={classes.main}></main>
>>>>>>> 7de4658aa591055963155418245c2892eafb4f5d
    </>
  );
}

export default MealsPage;
