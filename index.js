import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { logger } from "./middleware/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
