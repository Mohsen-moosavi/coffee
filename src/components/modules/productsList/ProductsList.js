'use client'
import React, { useState } from 'react'
import ProductCard from '../productCard/ProductCard'
import Pagination from '../pagination/Pagination'
import Search from '../search/Search'

export default function ProductsList({ wishlist }) {


    const [searchedProducts, setSearchedProducts] = useState([...wishlist])
    const [productsMustShowing, setProductsMustShowing] = useState([])

    function changeShowedProducts(items) {
        setProductsMustShowing(items)
    }

    function searchProductHandler(product) {
        setSearchedProducts(product)
    }

    return (
        <main className="main">
            <Search searchItemHandler={searchProductHandler} items={wishlist} searchKey={"shortName"} />
            <section className="last-product">
                <div className="container">
                    {productsMustShowing.length ? (
                        <>
                            <h3 className="section-title">لیست محصولات</h3>
                            <div className="row g-sm-5 g-4">
                                {productsMustShowing.map((item, index) => (
                                    <div className="col-6 col-md-4 col-xl-3" key={index}>
                                        <ProductCard {...item} />
                                    </div>
                                ))}

                            </div>
                        </>
                    ) : (
                        <>
                        <h3 className="section-title">محصولی یافت نشد!</h3>
                        </>
                    )}

                </div>
            </section>

            <Pagination itemsCount={searchedProducts?.length} itemsCountInEveryPage={6} itemsHandler={changeShowedProducts} items={searchedProducts} />


        </main>
    )
}
