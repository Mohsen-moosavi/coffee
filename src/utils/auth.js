const { hashSync, compareSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");


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
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" , token)
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
    } catch (error) {
        console.log(error)
        return false
    }

}

export {
    hashPassword,
    comparePassword,
    generateToken,
    generateRefreshToken,
    verifyToken
}