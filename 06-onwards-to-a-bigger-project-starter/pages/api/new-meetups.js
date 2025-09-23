import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const {title, image, address, description} = data;

    const client = await MongoClient.connect(
      "mongodb+srv://daniilliubko_db_user:V0nRrnGNoQt7cnct@cluster0.ungtxgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupsCollection = db.collection("Cluster0");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    console.log(res.status);
    res.status(201).json({ message: "Meetup inserted" });
  }
}
