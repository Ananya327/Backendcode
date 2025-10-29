// import { response } from "express";

// import { response } from "express"

export const send=(res,response,data={})=>{
    return res.send({
    message:response.message,
    code:response.code,
    data:data}
    )
}
export const setErrmsg=(response,param)=>{
    return{
        code:response.code,
        message:`${param},${response.message}`
    }
}