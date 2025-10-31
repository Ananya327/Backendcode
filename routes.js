import createStudent from "./src/controller/managestudent/createStudent.js"
import liststudent from "./src/controller/managestudent/liststudent.js";

const router=(app)=>{
app.use('/api/student/create',createStudent)
app.use('/api/student/list',liststudent);
}
export default router