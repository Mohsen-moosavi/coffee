import { isValidObjectId } from "mongoose";
import connectToDB from "../../../../../confings/db"
import wishlistModel from "../../../../../models/wishlist.model";

export async function GET(req, params ) {
    try {
        connectToDB()

        const userID = params?.params?.id;

        if (!isValidObjectId(userID)) {
            return Response.json({ message: "userID is not valid" }, { status: 400 })
        }

        const userWishlist = await wishlistModel.find({userID : userID})
        
        return Response.json({ userWishlist }, { status: 200 })


    } catch (error) {
        return Response.json({ message: "internal server error", error }, { status: 500 })
    }
}

export async function DELETE(req, params ) {
    try {
        connectToDB()

        const productID = params?.params?.id;
        const {searchParams} = new URL(req.url);
        const userID = searchParams.get("user");

        if (!isValidObjectId(userID) || !isValidObjectId(productID)) {
            return Response.json({ message: "userID or productID is not valid" }, { status: 400 })
        }

        await wishlistModel.findOneAndDelete({userID , productID})
        
        return Response.json({ message: "product delete from userWishlist" }, { status: 200 })



    } catch (error) {
        return Response.json({ message: "internal server error", error }, { status: 500 })
    }
}