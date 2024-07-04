import mongoose from "mongoose";
const {Schema} = mongoose;
require("./user.model")
require("./products.model")

const wishlistSchema = new mongoose.Schema({
    userID : {
        type : Schema.ObjectId,
        ref : 'User',
        required : true
    },
    productID : {
        type : Schema.ObjectId,
        ref : 'Product',
        required : true
    }
})

const wishlistModel = mongoose.models?.Wishlist || mongoose.model("Wishlist",wishlistSchema,'wishlist')

export default wishlistModel