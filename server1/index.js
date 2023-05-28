const express =require("express")
const mysql =require("mysql2")
const app=express()
const bodyparser=require("body-parser")


const cors=require("cors")





const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password: "kidist123@mysql",
     database:"asset_inventory_db"
})

app.use(cors(
    
))
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))

//api for login page
app.post("/login",(req,res)=>{
    const { firstname,  password}=req.body
    const sqlpost="SELECT * FROM register WHERE firstname=? AND password=? "
    db.query(sqlpost,[firstname,password],(err,result)=>{

        if(err){
            res.send({err: err})
        }else{
            if(result.length>0){
                res.send(result)
            }else{
                res.send({messsage:"wrong combination"})
            }
            
        }
    })

})
app.post("/addrerister",(req,res)=>{
    
    const { firstname, lastname, email, password}=req.body
    const sqlpost="INSERT INTO register(  firstname, lastname, email, password)VALUES(?,?,?,?)"
    db.query(sqlpost,[firstname, lastname, email, password],(err,result)=>{

        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})
//api for request page 
app.get("/getrequest",(req,res)=>{
    const sqlGet="SELECT * FROM request"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})
app.delete("/deleterequest/:requestNo",(req,res)=>{
    const{requestNo}=req.params
const sqldelete="DELETE FROM request WHERE requestNo=?"
db.query(sqldelete,requestNo,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
})
})
app.post("/postrequest",(req,res)=>{
    
    const {  requesterID, quantity, unit, price, approvedby, recievedby, productID}=req.body
    const sqlpost="INSERT INTO request( requesterID, quantity, unit, price, approvedby, recievedby, productID)VALUES(?,?,?,?,?,?,?)"
    db.query(sqlpost,[  requesterID, quantity, unit, price, approvedby, recievedby, productID],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})
app.get("/updaterequest/:requestNo",(req,res)=>{
    const{requestNo}=req.params
    const sqlget="SELECT * FROM request WHERE requestNo=?"
    db.query(sqlget,requestNo,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }) 
})
app.put("/updaterequest/:requestNo",(req,res)=>{
    const{requestNo}=req.params
    const{ requesterID, quantity, unit, price, approvedby, recievedby, productID}=req.body
    const sqlUpdate="UPDATE request SET requesterID=?,quantity=? ,unit=?,price=?,approvedby=?,recievedby=?,productID=?, WHERE requestNo=?"
    db.query(sqlUpdate,[ requesterID, quantity, unit, price, approvedby, recievedby, productID,requestNo],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
//api for supply
app.get("/getsupply",(req,res)=>{
    const sqlGet="SELECT * FROM supply"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})
app.delete("/deletesupply/:supplyID",(req,res)=>{
    const{supplyID}=req.params
const sqldelete="DELETE FROM supply WHERE supplyID=?"
db.query(sqldelete,supplyID,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
})
})
app.post("/postsupply",(req,res)=>{
    
    const { supplyType, Supplyingdate, vendorID}=req.body
    const sqlpost="INSERT INTO supply(  supplyType, Supplyingdate, vendorID)VALUES(?,?,?)"
    db.query(sqlpost,[ supplyType, Supplyingdate, vendorID],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})
app.get("/updatesupply/:supplyID",(req,res)=>{
    const{supplyID}=req.params
    const sqlget="SELECT * FROM supply WHERE supplyID=?"
    db.query(sqlget,supplyID,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }) 
})
app.put("/updatesupply/:supplyID",(req,res)=>{
    const{supplyID}=req.params
    const{ supplyType, Supplyingdate, vendorID}=req.body
    const sqlUpdate="UPDATE supply SET supplyType=?,Supplyingdate=? ,vendorID=? WHERE supplyID=?"
    db.query(sqlUpdate,[  supplyType, Supplyingdate, vendorID,supplyID],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

//api for department

app.get("/getdepartment",(req,res)=>{
    const sqlGet="SELECT * FROM department"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})
app.delete("/deletedepartment/:departmentID",(req,res)=>{
    const{departmentID}=req.params
const sqldelete="DELETE FROM department WHERE departmentID=?"
db.query(sqldelete,departmentID,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
})
})
app.post("/postdepartment",(req,res)=>{
    
    const { department_name, department_role, number_ofemployee}=req.body
    const sqlpost="INSERT INTO department(  department_name, department_role, number_ofemployee)VALUES(?,?,?)"
    db.query(sqlpost,[  department_name, department_role, number_ofemployee],(err,result)=>{

        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})
app.get("/updatedepartment/:departmentID",(req,res)=>{
    const{departmentID}=req.params
    const sqlget="SELECT * FROM department WHERE departmentID=?"
    db.query(sqlget,departmentID,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }) 
})
app.put("/updatedepartment/:departmentID",(req,res)=>{
    const{departmentID}=req.params
    const{department_name, department_role, number_ofemployee}=req.body
    const sqlUpdate="UPDATE department SET department_name=?,department_role=? ,number_ofemployee=? WHERE departmentID=?"
    db.query(sqlUpdate,[  department_name, department_role, number_ofemployee,departmentID],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }) 
})


//api for vendor table
app.get("/getvendor",(req,res)=>{
    const sqlGet="SELECT * FROM vendor"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})
app.delete("/deletevendor/:vendorID",(req,res)=>{
    const{vendorID}=req.params
const sqldelete="DELETE FROM vendor WHERE vendorID=?"
db.query(sqldelete,vendorID,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
})
})
app.post("/postvendor",(req,res)=>{
    
    const {vendorname, contactperson_name, phone, email}=req.body
    const sqlpost="INSERT INTO vendor( vendorname, contactperson_name, phone, email)VALUES(?,?,?,?)"
    db.query(sqlpost,[ vendorname, contactperson_name, phone, email],(err,result)=>{

        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})
app.get("/updatevendor/:vendorID",(req,res)=>{
    const{vendorID}=req.params
    const sqlget="SELECT * FROM vendor WHERE vendorID=?"
    db.query(sqlget,vendorID,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }) 
})
app.put("/updatevendor/:vendorID",(req,res)=>{
    const{vendorID}=req.params
    const{ vendorname, contactperson_name, phone, email}=req.body
    const sqlUpdate="UPDATE vendor SET vendorname=?,contactperson_name=? ,phone=? ,email=? WHERE vendorID=?"
    db.query(sqlUpdate,[ vendorname, contactperson_name, phone, email,vendorID],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

//api for product table
app.get("/getproduct",(req,res)=>{
    const sqlGet="SELECT * FROM product"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})
app.delete("/deleteproduct/:productID",(req,res)=>{
    const{productID}=req.params
const sqldelete="DELETE FROM product WHERE productID=?"
db.query(sqldelete,productID,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
})
})
app.post("/postproduct",(req,res)=>{
    
    const { productname, product_description, categoryID}=req.body
    const sqlpost="INSERT INTO product(productname, product_description, categoryID)VALUES(?,?,?)"
    db.query(sqlpost,[ productname, product_description, categoryID],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})
app.get("/updateproduct/:productID",(req,res)=>{
    const{productID}=req.params
    const sqlget="SELECT * FROM product WHERE productID=?"
    db.query(sqlget,productID,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }) 
})
app.put("/updateproduct/:productID",(req,res)=>{
    const{productID}=req.params
    const{ productname, product_description, categoryID}=req.body
    const sqlUpdate="UPDATE product SET productname=?,product_description=? ,categoryID=? WHERE productID=?"
    db.query(sqlUpdate,[ productname, product_description, categoryID,productID],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

// api for category table

app.get("/getcategory",(req,res)=>{
    const sqlGet="SELECT * FROM category"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})
app.delete("/deletecategory/:categoryID",(req,res)=>{
    const{categoryID}=req.params
const sqldelete="DELETE FROM category WHERE categoryID=?"
db.query(sqldelete,categoryID,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
})
})
app.post("/postcategory",(req,res)=>{
    
    const {categoryname,listofproduct,category_description}=req.body
    const sqlpost="INSERT INTO category( categoryname, listofproduct, category_description)VALUES(?,?,?)"
    db.query(sqlpost,[categoryname,listofproduct,category_description],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})
app.get("/updatecategory/:categoryID",(req,res)=>{
    const{categoryID}=req.params
    const sqlget="SELECT * FROM category WHERE categoryID=?"
    db.query(sqlget,categoryID,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }) 
})
app.put("/updatecategory/:categoryID",(req,res)=>{
    const{categoryID}=req.params
    const{categoryname,listofproduct,category_description}=req.body
    const sqlUpdate="UPDATE category SET categoryname=?,listofproduct=? ,category_description=? WHERE categoryID=?"
    db.query(sqlUpdate,[categoryname,listofproduct,category_description,categoryID],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})


//API FOR EMPLOYEE TABLE
app.get("/get",(req,res)=>{
    const sqlGet="SELECT * FROM contact"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
app.post("/post",(req,res)=>{
   
    const {name,email,contact}=req.body
    const sqlpost="INSERT INTO contact( name, email, contact)VALUES(?,?,?)"
    db.query(sqlpost,[name,email,contact],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})

})
app.delete("/delete/:id",(req,res)=>{
    const{id}=req.params
const sqldelete="DELETE FROM contact WHERE id=?"
db.query(sqldelete,id,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
})
})









app.get("/update/:id",(req,res)=>{
    const{id}=req.params
    const sqlget="SELECT * FROM contact WHERE id=?"
    db.query(sqlget,id,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }) 
})
app.put("/update/:id",(req,res)=>{
    const{id}=req.params
    const{name,email,contact}=req.body
    const sqlUpdate="UPDATE contact SET name=?,email=? ,contact=? WHERE id=?"
    db.query(sqlUpdate,[name,email,contact,id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
app.listen(5000,()=>{
    console.log("the server is running on port 5000")
})