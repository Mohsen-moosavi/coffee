import { passwordValidator, phoneValidator } from "@/utils/validators"
import connectToDB from "../../../../../confings/db"
import userModel from "../../../../../models/user.model"
import { comparePassword, generateRefreshToken, generateToken } from "@/utils/auth"

export async function POST(req){
    try {
        connectToDB()

        const body = await req.json()
        const {phone , password} = body

        const isValidPhone = phoneValidator(phone)
        const isValidPassword = passwordValidator(password)

        if(!isValidPassword || !isValidPhone){
            return Response.json({message:"phone or password is not valid"},{status : 422})
        }

        const user = await userModel.findOne({phone})
        if(!user){
            return Response.json({message:"user not found"},{status : 401})
        }

        const isPasswordCorrect = comparePassword(password,user.password)
        if(!isPasswordCorrect){
            return Response.json({message:"phone number and password are not match"},{status : 401})
        }

        const accessToken = generateToken({phone})
        const refreshToken = generateRefreshToken({phone})

        await userModel.findOneAndUpdate({phone} , {$set : {refreshToken}})

        return Response.json({message:"user login successfuly"},{status : 200 , headers : {'Set-Cookie' : `token=${accessToken};path=/;httpOnly=true`}})

    } catch (error) {
        console.log("error==>" , error)
    }
}