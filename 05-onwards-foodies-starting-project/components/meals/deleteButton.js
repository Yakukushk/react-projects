'use client'

import { deleteMealAction } from "@/lib/actions";

export default function DeleteButton({classes, meal}) {
  return (
    <form action={deleteMealAction.bind(null, meal.id)}>
      <button className={classes.button} type="submit">
        Delete Recipe
      </button>
    </form>
  );
}
