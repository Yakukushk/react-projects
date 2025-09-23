import connectionDatabase from "../../lib/db";

export default async function handler(req, res) {
  const { client, meetupsCollection } = await connectionDatabase();
  const result = await meetupsCollection.find();
  res.status(200).json(result);
  await client.close();
}