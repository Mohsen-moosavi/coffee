import mongoose from "mongoose";
const {Schema} = mongoose;
require("./comments.model")


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        reqiured : true
    },
    shortName : {
        type : String,
        reqiured : true
    },
    price : {
        type : Number,
        reqiured : true
    },
    shortDescription : {
        type : String,
        reqiured : true
    },
    longDescription : {
        type : String,
        reqiured : true
    },
    company : {
        type : String,
        reqiured : true
    },
    store : {
        type : Number,
        reqiured : true
    },
    weight : {
        type : Number,
        reqiured : true
    },
    smell : {
        type : String,
        reqiured : true
    },
    suitable : {
        type : String,
        reqiured : true
    },
    score : {
        type : Number,
        default : 5,
        reqiured : true,
    }
})

productSchema.virtual("comments",{
    ref : 'Comment',
    localField : "_id",
    foreignField : "product"
})

const productsModel =mongoose.models?.Product || mongoose.model("Product",productSchema,"products")

export default productsModel;