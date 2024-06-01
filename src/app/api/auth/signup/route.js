import connectToDB from "../../../../../confings/db"

export async function GET(req){
    try {
        connectToDB()

        

        return Response.json({message:"hello"})
    } catch (error) {
        console.log("error" , error)
    }
}