import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import ProductsList from '@/components/modules/productsList/ProductsList'
import React from 'react'
import connectToDB from '../../../confings/db'
import wishlistModel from '../../../models/wishlist.model'
import { isUserLogin } from '@/utils/auth'
import Login from '@/components/templates/login-register/login/Login'

export default async function Wishlist() {

  connectToDB()
  const user = await isUserLogin()
  let wishlist = [];
  if (user) {
    const wishlistOfUser = await wishlistModel.find({ userID: user._id.toString() }).populate('productID',"-comments").lean()
    wishlist = wishlistOfUser.map(item=>item.productID)
  } else {
    return (
      <>
        <Login />
      </>
    )
  }

  return (
    <>
      <Header isUserLogin={!!user} />
      <ProductsList wishlist={JSON.parse(JSON.stringify(wishlist))} />
      <Footer />
    </>
  )
}
