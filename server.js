import express from "express";
import cors from "cors";
import "./loadEnv.js";
import notes from "./routes/note.js";
import { MongoClient } from "mongodb";

const app = express();
const PORT = process.env.PORT || 5050;

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());
app.use(express.static("docs"));
app.use("/note", notes);

client.connect((err) => {
  if (err) {
    console.error(err);
    return false;
  }
  // connection to mongo is successful, listen for requests
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
