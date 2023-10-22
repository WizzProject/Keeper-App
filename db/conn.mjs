import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;

try {
  console.log("Connecting to MongoDB Atlas...");
  conn = await client.connect();
} catch (error) {
  console.error(error);
}

let db = conn.db(process.env.DB_NAME);

export default db;
