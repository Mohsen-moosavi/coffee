import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import ProductDetailsTabs from '@/components/templates/product-details/product-details-tabs/Product-details-tabs'
import ProductInfo from '@/components/templates/product-details/product-info/Product-info'
import RelatedProducts from '@/components/templates/product-details/related-products/Related-products'
import { isUserLogin } from '@/utils/auth'
import React from 'react'

export default async function page() {

  const user =await isUserLogin()

  return (
    <>
    <Header isUserLogin={!!user}/>
      <main>
        <ProductInfo/>
        <ProductDetailsTabs/>
        <RelatedProducts/>
      </main>
    <Footer/>
    </>
  )
}
