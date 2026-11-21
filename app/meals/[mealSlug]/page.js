import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default async function MealsDetailPage({ params }) {
  const param = await params;
  const meal = getMeal(param.mealSlug);
  if (!meal) {
    return notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>{meal.creator_email}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
}
