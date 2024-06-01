export async function GET(req){
    try {
        return Response.json({message:"hello"})
    } catch (error) {
        console.log("error==>" , error)
    }
}