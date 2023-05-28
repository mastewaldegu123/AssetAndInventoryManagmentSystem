import mysql from "mysql2"
export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"maste@7isme",
    database:"asset_db"
})