import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import ProductDetailsTabs from '@/components/templates/product-details/product-details-tabs/Product-details-tabs'
import ProductInfo from '@/components/templates/product-details/product-info/Product-info'
import RelatedProducts from '@/components/templates/product-details/related-products/Related-products'
import { isUserLogin } from '@/utils/auth'
import React from 'react'
import connectToDB from '../../../../confings/db'
import productsModel from '../../../../models/products.model'
import NotFound from '@/components/templates/not-found/Not-found'
import { isValidObjectId } from 'mongoose'
import { SUITABLE_TYPES } from '@/utils/Constant'

export default async function page({ params }) {

    connectToDB()
    const user = await isUserLogin();
    let productDetails;
    let relatedProducts;

    if (isValidObjectId(params.id)) {
        productDetails = await productsModel.findOne({ _id: params.id }).populate('comments').lean()
        relatedProducts = await productsModel.find({ suitable: productDetails.suitable })

    }

    if (!productDetails) {
        return (
            <NotFound />
        )
    }

    return (
        <>
            <Header isUserLogin={!!user} />
            <main>
                <ProductInfo
                    name={productDetails.name}
                    commentsLength={productDetails.comments?.filter((comment) => comment.isShow).length}
                    price={productDetails.price}
                    shortDescription={productDetails.shortDescription}
                    company={productDetails.company}
                    store={productDetails.store}
                    score={productDetails.score}
                />
                <ProductDetailsTabs
                    {...productDetails}
                    userID={user?._id}
                    userName={user?.name}
                />
                <RelatedProducts relatedProducts={JSON.parse(JSON.stringify(relatedProducts))} productID={productDetails._id}/>
            </main>
            <Footer />
        </>
    )
}
