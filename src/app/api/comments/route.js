import connectToDB from "../../../../confings/db";
import commentsModel from "../../../../models/comments.model";

export async function POST(req) {
    try {
        connectToDB()

        const { user,
            username,
            body,
            product,
            score } = await req.json()

            await commentsModel.create({ user,
                username,
                body,
                product,
                score})

            return Response.json({message : "comment created successfully"} , {status : 201})
    } catch (error) {
        return Response.json({message : "external server error" , error} , {status : 500})
    }
}

export async function GET(){
    try {
        connectToDB()

        const allComments = await commentsModel.find({}).populate(['product' , 'user'])

        return Response.json(allComments , {status : 200})
    } catch (error) {
        return Response.json({message : 'external server error' , error} , {status : 500})
    }
}