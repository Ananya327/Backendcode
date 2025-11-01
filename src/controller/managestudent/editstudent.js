import { Router } from "express";
import { RESPONSE } from "../../config/global.js";
import { send, setErrmsg } from "../../helper/responseHelper.js";
import studentModule from "../../modules/studentModule.js";
const router = Router();

export default router.put("/", async (req, res) => {
  try {
    let student_id = req.query.student_id;
    if (!student_id || student_id == undefined) {
      return send(res, setErrmsg(RESPONSE.REQURIED, "student_id"));
    }
    let { name, email, rollno, usn } = req.body || {};
    let updates = {};
    if (name && name != undefined) {
      updates.name = name;
    }
     if (rollno && rollno != undefined) {
       updates.rollno = name;
     }
    // if (rollno && rollno != undefined) {
    //   let studentData = await studentModule.findOne({
    //     rollno: rollno,
    //     _id: { $ne: student_id },
    //   });
    //   if (studentData) {
    //     return send(res, setErrmsg(RESPONSE.ALREADYEXIT, "rollno"));
    //   }
    //   updates.rollno = rollno;
    // }
    if (usn && usn != undefined) {
      let studentData = await studentModule.findOne({
        usn: usn,
        _id: { $ne: student_id },
      });


console.log(studentData);


      if (studentData) {
        return send(res, setErrmsg(RESPONSE.ALREADYEXIT, "usn"));
      }
      updates.rollno = rollno;
    }
    if (email && email != undefined) {
      
       let ismail = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
       // validation check
       if (!ismail) {
         return send(res, setErrmsg(RESPONSE.INVALID, "email"));
       }
       updates.email = email;

    }


    console.log(updates);
    

    //   await studentModule.updateOne(
    //       {
    //           _id:student_id,
    //       },{

    //       $set:updates

    //   })

    return send(res, RESPONSE.SUCCESS);
  } catch (err) {
    console.log("upadte student", err);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
