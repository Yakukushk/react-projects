import HrefLink from "@/components/main-header/href-link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "../loading";



export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community'
}
export async function Meals() {
  const {meals} = await getMeals();
  console.log(meals);
  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <HrefLink classes={classes} href="/meals/share">
            Share Your Favorite Recipe
          </HrefLink>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
