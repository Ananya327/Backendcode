import createStudent from "./src/controller/managestudent/createStudent.js"
import liststudent from "./src/controller/managestudent/liststudent.js";
import deteleStudentdata from "./src/controller/managestudent/deteleStudentdata.js";
import editstudent from "./src/controller/managestudent/editstudent.js";

const router=(app)=>{
app.use('/api/student/create',createStudent)
app.use('/api/student/list',liststudent);
app.use('/api/student/delete',deteleStudentdata)
app.use('/api/student/edit', editstudent);
}
export default router