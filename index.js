import express, { urlencoded } from "express";
import connectDB from "./src/helper/database.js";
import router from "./routes.js";
import dotenv from "dotenv";
// dotenv.config();
dotenv.config({ quiet: true });
const app = express();

// allow json  format and accect urlencoder
app.use(express.json());
// except urlencoded
app.use(express.urlencoded({ extended: true }));

// calling route
connectDB();
router(app);

app.listen(process.env.PORT, () => {
  console.log("server listening to PORT ", process.env.PORT);
});
