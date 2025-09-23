
import { MongoClient } from "mongodb";
export const uri =  process.env.DB_ADDRESS;
export default async function connectionDatabase() {
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection("Cluster0");
  return { client: client, meetupsCollection };
}
