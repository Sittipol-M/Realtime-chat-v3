import express from "express";
import routes from "./routes/routes.js";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectMongo } from "./configs/mongo.js";
import handleError from "./others/middlewares/handleError.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3500;

connectMongo();
app.use(bodyParser.json());
app.use(routes);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`This app is listening on port ${PORT}`);
});
