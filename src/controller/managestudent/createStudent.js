import { Router } from "express";
import studentModule from "../../modules/studentModule.js";
const router = Router();

export default router.post("/", async (req, res) => {
  try {
    let { name, email, rollno ,usn} = req.body || {};
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
