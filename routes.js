import createStudent from "./src/controller/managestudent/createStudent.js"

const router=(app)=>{
app.use('/api/student',createStudent)
}
export default router