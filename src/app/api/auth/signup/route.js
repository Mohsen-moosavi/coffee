import { generateToken, hashPassword } from "@/utils/auth";
import connectToDB from "../../../../../confings/db"
import userModel from "../../../../../models/user.model";
import { roles } from "@/utils/Constant";
import { nameValidator, passwordValidator, phoneValidator } from "@/utils/validators";

export async function POST(req){
    try {
        connectToDB()

        const {name , phone , password, profile} = await req.json();

        const isNameValid = nameValidator(name);
        const isPhoneValid = phoneValidator(phone)
        const isPasswordValidate = passwordValidator(password)

        if(!isNameValid || !isPasswordValidate || !isPhoneValid){
            return Response.json({message : "user info is not valid"} , {status : 400})
        }

        const isUserAllreadyExist = await userModel.findOne({phone});


        if(isUserAllreadyExist){
            return Response.json({message : "user allreadyExist"} , {status : 422})
        }

        const hashedPassword = hashPassword(password)
        const accessToken = generateToken({phone})
        const allUsers = await userModel.find()

        await userModel.create({
            name,
            phone,
            password : hashedPassword,
            profile,
            role: allUsers?.length > 0 ? roles.USER : roles.ADMIN
        })


        return Response.json({message:"new user created successfully"} , {status : 201 , headers : { 'Set-Cookie' : `token=${accessToken};path=/;httpOnly=true` }})
    } catch (error) {
        console.log("error" , error)
    }
}