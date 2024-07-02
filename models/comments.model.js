import mongoose from "mongoose";
const {Schema} = mongoose;
require("./user.model")
require("./products.model")

const commentSchema = new mongoose.Schema({
    user : {
        type : Schema.ObjectId,
        ref : "User",
        required : true
    },
    username : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default :  ()=>Date.now()
    },
    body : {
        type : String,
        required : true
    },
    product : {
        type : Schema.ObjectId,
        ref : "Product",
        required : true
    },
    score : {
        type : Number,
        required : true,
        default : 5
    },
    isShow : {
        type : Boolean,
        default : false,
    }
})

const commentsModel =mongoose.models?.Comment || mongoose.model("Comment",commentSchema,"comments")

export default commentsModel;