import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = db.collection("notes");
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  const newDocument = {
    title: req.body.title,
    content: req.body.content,
  };
  const collection = db.collection("notes");
  const result = await collection.insertOne(newDocument);

  res.send(result).status(204);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const collection = db.collection("notes");
  const result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
