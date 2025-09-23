
import { MongoClient } from "mongodb";
export const uri =  "mongodb+srv://daniilliubko_db_user:V0nRrnGNoQt7cnct@cluster0.ungtxgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export default async function connectionDatabase() {
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection("Cluster0");
  return { client: client, meetupsCollection };
}
