import { Router } from "express";
import { send, setErrmsg } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../config/global.js";
import studentModule from "../../modules/studentModule.js";
import { STATE } from "../../config/constant.js";
const router=Router()
export default router.delete("/",async(req,res)=>
{
    try{
        let student_id=req.query.student_id;
let student_Data=await studentModule.findOne(
    {
        _id:student_id,
        isactive:STATE.ACTIVE
    }
)

        if(!student_id || student_id==undefined){
            return send(res,setErrmsg(RESPONSE.REQURIED,"student_id"))
        }

if(!student_Data)
{
    return send(res,setErrmsg(RESPONSE.NOSTU,"student_id"))
}
await studentModule.updateOne(
    {
        _id:student_id,
    },{
    $set:
    { isactive:STATE.INACTIVE

    }
}
)
// delete data from table

// await studentModule.deleteOne(
//   {
//     _id: student_id,
//   },
  
// );

return send(res,RESPONSE.SUCCESS)
    }catch(e){
        console.log("delete student",e)
         return send(res, setErrmsg(RESPONSE.UNKNOWN_ERROR));
    }
})