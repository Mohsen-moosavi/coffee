import connectToDB from "../../../../../confings/db"

export async function POST(req){
    try {
        connectToDB()

        const {name , phone , password, profile} = await req.json();

        const isNameValid = nameValidator(name);
        const isPhoneValid = phoneValidator(phone)
        const isPasswordValidate = passwordValidator(password)

    } catch (error) {
        console.log("error" , error)
    }
}