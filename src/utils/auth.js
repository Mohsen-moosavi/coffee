import connectToDB from "../../confings/db";
import userModel from "../../models/user.model";

const { hashSync, compareSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const {cookies} = require("next/headers")


function hashPassword(password){
    const hash = hashSync(password , 12)
    return hash;
}

function comparePassword(password,hashedPassword){
    const isPasswordTrue = compareSync(password , hashedPassword)
    return isPasswordTrue
}

function generateToken(data){
    const token = sign({...data},process.env.HWT_PRIVATE_SECRET_KEY,{
        expiresIn : '60d'
    })
    return token
}

function generateRefreshToken(data){
    const refreshToken = sign({...data},process.env.REFRESH_TOKEN_JWT_PRIVATE_SECRET_KEY,{
        expiresIn : '15d'
    })
    return refreshToken;
}

function verifyToken(token){
    try {
        const tokenPayload = verify(token,process.env.HWT_PRIVATE_SECRET_KEY)
        return tokenPayload
    } catch (error) {
        return false
    }

}

async function isUserLogin(){
    connectToDB()
    const token = cookies().get('token')
    if(token){
        const tokenPayload = verifyToken(token.value)
        if(tokenPayload){
            const user = await userModel.findOne({phone : tokenPayload.phone})
            return user
        }
    }
    return false
}

export {
    hashPassword,
    comparePassword,
    generateToken,
    generateRefreshToken,
    verifyToken,
    isUserLogin
}