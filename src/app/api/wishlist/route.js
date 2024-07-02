import { isValidObjectId } from "mongoose"
import connectToDB from "../../../../confings/db"
import productsModel from "../../../../models/products.model"
import userModel from "../../../../models/user.model"
import wishlistModel from "../../../../models/wishlist.model"

export async function POST(req) {
    try {
        connectToDB()
        const { userID, productID } = await req.json()

        if(!isValidObjectId(userID) || !isValidObjectId(productID)){
            return Response.json({ message: "productID or userID is not valid objectID" }, { status: 400 })
        }

        const wishItem = await wishlistModel.find({userID , productID})
        if(wishItem.length){
            return Response.json({ message: "wish item is already exist" }, { status: 409 })
        }

        const user = await userModel.find({ _id: userID })
        if (!user) {
            return Response.json({ message: "user not found" }, { status: 400 })
        }

        const product = await productsModel.find({ _id: productID })
        if (!product) {
            return Response.json({ message: "product not found" }, { status: 400 })
        }

        await wishlistModel.create({
            userID,
            productID
        })

        return Response.json({message : "wishlist added successfully"} , {status : 201})

    } catch (error) {
        return Response.json({ message: "internal server error", error }, { status: 500 })
    }
}