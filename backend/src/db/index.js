import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async ()=>{
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}`)
       console.log(`/n MongoDb connection!!  DB host: ${connectionInstance.connection.host}`);
    } catch (error){
        console.error("Mongo Db connection Failed: ", error);
        process.exit(1);
    }
}

export default connectDB;