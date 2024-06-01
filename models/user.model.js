import mongoose from "mongoose";

const userSchema = mongoose.schema({
    phone: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    password : {
    type: String,
    required: true
    },
    profile : {
        type : String,
        required : false
    },
    refreshToken : {
        type : String,
        required : false,
        default:''
    },
    role : {
        type : String,
        required : true,
        default : "USER"
    }
})

const userModel = mongoose.models?.User || mongoose.model("'User",userSchema,"Users")

export default userModel