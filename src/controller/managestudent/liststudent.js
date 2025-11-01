import { Router } from "express";
import studentModule from "../../modules/studentModule.js";
import { STATE } from "../../config/constant.js";
import { setErrmsg } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../config/global.js";
import { send } from "../../helper/responseHelper.js";
const route = Router();

export default route.get("/", async (req, res) => {
  try {
    // only active are listed
    // first parameter are where condition and second fields
    //     let studentData = await studentModule.find({
    //       isactive: STATE.ACTIVE,},
    //       {
    // isactive:0,
    // __v:0
    //       }
    //     );

    let student_id = req.query.student_id;
    // pagenation concept

    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let query = {
      isactive: STATE.ACTIVE,
      name: { $regex: req.query.searchKey ?? "", $options: "i" },
    };
    student_id != undefined ? (query._id = student_id) : "";

// count the number of student
let totalcount=await studentModule.countDocuments(query)

    // page=1 limit=10
    let studentData = await studentModule
      .find(query, { isactive: 0, __v: 0 })
      .skip((page - 1) * limit)
      .limit(limit);

    //  let studentData = await studentModule.aggregate([
    //    {
    //     $match:{
    //      isactive: STATE.ACTIVE,
    //    },
    // },
    //    {
    //     $project:{
    //      isactive: 0,
    //      __v: 0,
    //    }
    // }
    //  ]
    // );
    // to find toatal length you can use find method and fing length of the data
    if (studentData.length == 0) {
      return send(res, setErrmsg(RESPONSE.NOSTU, "student"));
    }
    return send(res, RESPONSE.SUCCESS, studentData,
      {
        totalcount:totalcount,
        currentpage:page,
        totalpage:Math.ceil(totalcount/2)
      }
    );
  } catch (e) {
    console.log("Student list", e);
    return send(res, setErrmsg(RESPONSE.UNKNOWN_ERROR));
  }
});
