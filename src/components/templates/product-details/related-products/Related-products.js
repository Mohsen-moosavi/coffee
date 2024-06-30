'use client'
import React from 'react'
import style from './../product-details.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '@/components/modules/productCard/ProductCard';

export default function RelatedProducts() {
  return (
    <section class={style.relatedProduct}>
      <div class="container">
        <div className={style.swiper}>
          <h4 class={style.srelatedProductTtle}>محصولات مرتبط</h4>


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
            <SwiperSlide className={style.swiperSlide}>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <ProductCard/>
            </SwiperSlide>

          </Swiper>

        </div>
      </div>
    </section>
  )
}
