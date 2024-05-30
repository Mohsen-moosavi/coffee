import ProductCard from '@/components/modules/productCard/ProductCard'
import React from 'react'

export default function LastProducts() {
  return (
    <section>
    <div className="container">
        <h3 className="section-title">آخرین محصولات</h3>
        <div className="row g-sm-5 g-4" data-aos="fade-up">
            <div className="col-6 col-md-4 col-xl-3">
                <ProductCard/>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
                <ProductCard/>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
                <ProductCard/>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
                <ProductCard/>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
                <ProductCard/>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
                <ProductCard/>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
                <ProductCard/>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
                <ProductCard/>
            </div>
        </div>
        <div className="section-btn">
            <a href="#" className="section-btn__link">مشاهده همه محصولات</a>
        </div>
    </div>
</section>
  )
}
