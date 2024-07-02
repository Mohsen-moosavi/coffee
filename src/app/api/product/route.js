import connectToDB from "../../../../confings/db";
import productsModel from "../../../../models/products.model";

export async function POST(req) {
    try {
        connectToDB()
        const {
            name,
            shortName,
            price,
            shortDescription,
            longDescription,
            company,
            store,
            weight,
            smell,
            suitable,
            score
        } = await req.json()

        const newProduct = await productsModel.create({
            name,
            shortName,
            price,
            shortDescription,
            longDescription,
            company,
            store,
            weight,
            smell,
            suitable,
            score
        })

        return Response.json({ message: "product created successfully" }, { status: 201 })

    } catch (error) {
        return Response.json({ message: "internal server error" ,error }, { status: 500 })
    }
}

export async function GET() {
    try {
        connectToDB()
        const allProducts = await productsModel.find({}).populate("comments").lean()

        return Response.json(allProducts , {status : 200})
    } catch (error) {
        return Response.json({message: "internalserver error" , error} , {status : 500})        
    }
}