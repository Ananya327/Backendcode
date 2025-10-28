import express, { urlencoded } from "express";
import connectDB from "./src/helper/database.js";
import router from "./routes.js";
import dotenv from "dotenv";
dotenv.config()
const app = express();


// allow json  format and accect urlencoder
app.use(express.json());
// except urlencoded
app.use(express.urlencoded({ extended: true }));

// calling route
connectDB();
router(app);

app.listen(process.env.PROT, () => {
  console.log("server listening to PORT ", 3000);
});
