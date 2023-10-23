import express from "express";
import cors from "cors";
import "./loadEnv.js";
import notes from "./routes/note.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("docs"));

app.use("/note", notes);

app.get("/", (req, res) => {
  res.redirect("/note");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
