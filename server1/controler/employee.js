import { v4 as uuid } from 'uuid';
let employee=[]
export const getEmployee =(req,res)=>{
    res.send(employee )
}
export const CreateEmployee =(req,res)=>{
    const employe =req.body
    employee.push({...employe,id:uuid()})
    res.send("employee add sucessfuly")
}
