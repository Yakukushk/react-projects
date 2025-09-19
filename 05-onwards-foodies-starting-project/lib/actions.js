"use server";

import { saveMeal, deleteMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function InvalidText(text) {
  return !text || text.trim() === "";
}
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    InvalidText(meal.title) ||
    InvalidText(meal.summary) ||
    InvalidText(meal.instructions) ||
    InvalidText(meal.creator) ||
    InvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@")
  ) {
    return {
      message: "Invalid input",
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // logger
  // console.log('Form data received:', meal);
  // console.log('Image type:', typeof meal.image);
  // console.log('Image value:', meal.image);

  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
}

export async function deleteMealAction(id) {
  try {
    await deleteMeal(id);
    revalidatePath("/meals", "layout");
  } catch (e) {
    console.error("Delete error:", e);
    throw new Error("Failed to delete meal: " + e.message);
  } finally {
    redirect("/meals");
  }
}
``