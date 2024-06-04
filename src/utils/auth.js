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
        expiresIn : '60s'
    })
    return token
}

function generateRefreshToken(data){
    const refreshToken = sign(data,process.env.REFRESH_TOKEN_JWT_PRIVATE_SECRET_KEY,{
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

function nameValidator(username) {
    // const patern = /^[a-z0-9_-]{3,15}$/g
    // return patern.test(username)
    console.log('userName ====>', username?.trim().length)
    return !!(username?.trim().length)

}

function passwordValidator(password) {
    const patern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g
    return patern.test(password)
}

function phoneValidator(phone) {
    const patern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g
    return patern.test(phone)
}

export {
    hashPassword,
    comparePassword,
    generateToken,
    generateRefreshToken,
    verifyToken,
    nameValidator,
    passwordValidator,
    phoneValidator
}