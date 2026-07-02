import mongoose from "mongoose"

export const db = (URI)=>{
    try{
        mongoose.connect(URI)
        const database = mongoose.connection
        db.once("open", ()=>{
            console.log("Database connected successfully")
        })
    }
    catch(err){
        console.log("Unable to connect Db")
    }
}