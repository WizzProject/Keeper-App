import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import notes from "./routes/note.mjs";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/note", notes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
