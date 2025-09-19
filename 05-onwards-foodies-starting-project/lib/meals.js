import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    meals: db.prepare("SELECT * FROM meals").all(),
  };
}

export async function getMeal(slug) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(slug);
  return {
    meal: db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug),
  };
}

export async function deleteMeal(id) {
  db.prepare(`DELETE FROM meals WHERE id = ?`).run(id);
}

export async function saveMeal(meal) {
  console.log('saveMeal received:', meal);
  console.log('Image in saveMeal:', meal.image);
  
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Handle case when no image is provided
  if (!meal.image || meal.image.size === 0) {
    console.log('No image provided, using default');
    meal.image = '/images/burger.jpg'; // Default image
  } else {
    console.log('Processing uploaded image:', meal.image.name);
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error('Saving image failed!');
      }
    });

    meal.image = `/images/${fileName}`;
  }

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}