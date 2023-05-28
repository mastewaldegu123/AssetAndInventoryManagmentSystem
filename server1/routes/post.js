import express from "express"
import  {getEmployees,CreateEmployee,getEmployee} from "../controler/employee.js"
const router=express.Router()
router.get("/employee",getEmployees)
router.post("/addemployee",CreateEmployee)
router.get("/addemployee/:id",getEmployee)
export default router