import { Router } from "express";
import studentModule from "../../modules/studentModule.js";
const router = Router();

export default router.post("/", async (req, res) => {
  try {
    let { name, email, rollno, usn } = req.body || {};

    // to define  requried fields
    if (!name || name == undefined) {
      return res.send({
        message: "name requried",
      });
    }
    if (!email || email == undefined) {
      return res.send({
        message: "email requried",
      });
    }
    if (!rollno || rollno == undefined) {
      return res.send({
        message: "rollno requried",
      });
    }
    if (!usn || usn == undefined) {
      return res.send({
        message: "usn requried",
      });
    }
    await studentModule.create({
      //     ...req.body
      name,
      email,
      rollno,
      usn,
    });

    console.log({ ...req.body });
    return res.send({
      message: "ok",
    });
  } catch (e) {
    console.log("error", e);
  }
});
