import mongoose from "mongoose";

async function connectToDB(){
    try{
        if(mongoose.connections[0].readyState){
            return true
        }else{
            await mongoose.connect(process.env.MONGODB_URL)
            console.log("mongoDB is connected")
        }
    }catch(err){
        console.log("mongo db is not connect", err)
    }
}

export default connectToDB