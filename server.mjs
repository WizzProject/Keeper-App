import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import notes from "./routes/note.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/note", notes);

app.get("/", (req, res) => {
  res.send("<p>Keeper App</p>");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
