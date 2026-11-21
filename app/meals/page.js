import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";

import MealdGrid from "@/components/meals/meals-grid";

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your faviourite recipe.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <MealdGrid />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
