import mongoose from "mongoose";
const connectDB = () => {
  mongoose
    // .connect(
    //   "mongodb+srv://ananyanaik02:ananyaNaik@cluster0.9mjpyd9.mongodb.net/?appName=Cluster0",
    //   { dbName: "internship-october" }
    // ) //for atals

    .connect(
      process.env.MONGO_URL,
      { dbName: process.env.DB_NAME }
    )
    // mongoose
    //   .connect("mongodb://127.0.0.1:27017/test")//for compass
    .then(() => console.log("Connected!"))
    .catch((err) => console.log("error", err));
};
export default connectDB;
