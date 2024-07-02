'use client'
import React from 'react'
import style from './../product-details.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '@/components/modules/productCard/ProductCard';
import connectToDB from '../../../../../confings/db';
import productsModel from '../../../../../models/products.model';
import { SUITABLE_TYPES } from '@/utils/Constant';

export default function RelatedProducts({ relatedProducts, productID }) {

  return (
    <section className={style.relatedProduct}>
      <div className="container">
        <div className={style.swiper}>
          <h4 className={style.srelatedProductTtle}>محصولات مرتبط</h4>


          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 40,
              }
            }}
          >
            {relatedProducts.map((product, index) => {
              if (product._id !== productID) {
                return (
                  <SwiperSlide className={style.swiperSlide} key={index}>
                    <ProductCard {...product}/>
                  </SwiperSlide>
                )
              }
            })}

          </Swiper>

        </div>
      </div>
    </section>
  )
}
