import { Router } from "express";
import studentModule from "../../modules/studentModule.js";
import { RESPONSE } from "../../config/global.js";
import { send ,setErrmsg} from "../../helper/responseHelper.js";
const router = Router();

export default router.post("/", async (req, res) => {
  try {
    let { name, email, rollno, usn } = req.body || {};

    // to define  requried fields
    if (!name || name == undefined) {
      return send(res, setErrmsg(RESPONSE.REQURIED, "name"));
    }
    if (!email || email == undefined) {
     return send(res, setErrmsg(RESPONSE.REQURIED, "email"));
    }
    
    if (!rollno || rollno == undefined) {
     return send(res, setErrmsg(RESPONSE.REQURIED, "rollno"));
    }
    
    if (!usn || usn == undefined) {
      return send(res, setErrmsg(RESPONSE.REQURIED, "usn"));
    }
    
    // object form
    let studentRollno = await studentModule.findOne({ usn: usn });
    if (studentRollno) {
      return res.send({
        message: "roll number already exist",
      });
    }
    // arry form
    // let studentRollno = await studentModule.find({ usn: usn });
    //     if (studentRollno<1) {
    //       return res.send({
    //         message: "roll number already exist",
    //       });
    //     }
    // if remove x it will hit unknow error
    let x=await studentModule.create({
      //   //     ...req.body
      name,
      email,
      rollno,
      usn,
    });
    // regex to check email format
    let ismail = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    // validation check
    if (!ismail) {
       return send(res, setErrmsg(RESPONSE.INVAILD, "email"));
    }

    console.log({ ...req.body });
    return send(res,RESPONSE.SUCCESS,x);
  } catch (e) {
    console.log("error", e);
       return send(res, setErrmsg(RESPONSE.UNKNOWN_ERROR));
  }
});

