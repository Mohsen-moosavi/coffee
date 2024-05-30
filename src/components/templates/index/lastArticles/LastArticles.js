"use client"
import React from 'react'
import style from './LastArticles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, pagination } from 'swiper/modules'
import ArticleBox from '@/components/modules/articleBox/ArticleBox'

export default function LastArticles() {
    return (
        <section className={style.lastArticles}>
            <div className="container">
                {/* <div className="swiper mySwiper">
                    <h4 className="last-articles__title section-title">جدید ترین مقالات</h4>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="article-box">
                                <div className="article-box__cover">
                                    <img src="./images/coffee1.jpg" className="article-box__img" alt="article"/>
                                        <div className="article-box__shadow"></div>
                                        <h6 className="article-box__title">مصرف قهوه به همراه شیر برای کاهش التهاب بیندس بسنی تسنبیا
                                            تبسایت ن ساتتیباسنل</h6>
                                </div>
                                <div className="article-box__content flex-between-center">
                                    <span className="article-box__date">3 اردیبهشت 1401</span>
                                    <span className="article-box__writer">سید محسن موسوی</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="article-box">
                                <div className="article-box__cover">
                                    <img src="./images/coffee1.jpg" className="article-box__img" alt="article"/>
                                        <div className="article-box__shadow"></div>
                                        <h6 className="article-box__title">مصرف قهوه به همراه شیر برای کاهش التهاب بیندس بسنی تسنبیا
                                            تبسایت ن ساتتیباسنل</h6>
                                </div>
                                <div className="article-box__content flex-between-center">
                                    <span className="article-box__date">3 اردیبهشت 1401</span>
                                    <span className="article-box__writer">سید محسن موسوی</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="article-box">
                                <div className="article-box__cover">
                                    <img src="./images/coffee1.jpg" className="article-box__img" alt="article"/>
                                        <div className="article-box__shadow"></div>
                                        <h6 className="article-box__title">مصرف قهوه به همراه شیر برای کاهش التهاب بیندس بسنی تسنبیا
                                            تبسایت ن ساتتیباسنل</h6>
                                </div>
                                <div className="article-box__content flex-between-center">
                                    <span className="article-box__date">3 اردیبهشت 1401</span>
                                    <span className="article-box__writer">سید محسن موسوی</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="article-box">
                                <div className="article-box__cover">
                                    <img src="./images/coffee1.jpg" className="article-box__img" alt="article"/>
                                        <div className="article-box__shadow"></div>
                                        <h6 className="article-box__title">مصرف قهوه به همراه شیر برای کاهش التهاب بیندس بسنی تسنبیا
                                            تبسایت ن ساتتیباسنل</h6>
                                </div>
                                <div className="article-box__content flex-between-center">
                                    <span className="article-box__date">3 اردیبهشت 1401</span>
                                    <span className="article-box__writer">سید محسن موسوی</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-btn">
                        <a href="#" className="section-btn__link">مشاهده همه محصولات</a>
                    </div>
                </div> */}
                <h4 className={`${style.lastArticles__title} section-title`}>جدید ترین مقالات</h4>
                <Swiper
                    loop="true"
                    autoplay={{
                        delay: 5000
                    }}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                    modules={[Pagination]}
                    className={`${style.swiper} mySwiper`}>
                    <SwiperSlide><ArticleBox /></SwiperSlide>
                    <SwiperSlide><ArticleBox /></SwiperSlide>
                    <SwiperSlide><ArticleBox /></SwiperSlide>
                    <SwiperSlide><ArticleBox /></SwiperSlide>
                    <SwiperSlide><ArticleBox /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
