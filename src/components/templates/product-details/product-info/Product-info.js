import React from 'react'
import style from './../product-details.module.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Image from 'next/image';

export default function ProductInfo(props) {

    return (
        <section className={style.productDetails}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className={style.productDetailsCover}>
                            <Image src={'/'+"images/products/cappochino-1.png"} className={style.productDetailsImg} alt="cappochino" width={500} height={400}/>
                            <div className={style.productDetailsImgCircle}>
                                <Image src={'/'+'images/product-background.jpg'} className={style.productDetailsImgCircleImg} alt="back" width={500} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8">
                        <div className={`${style.productDetailsMainInfo} flex-between-center`}>
                            <div className={style.productDetailsMainInfoWrapper}>
                                <h1 className={style.productDetailsTitle}>{props.name}</h1>
                                <div className={style.productDetailsScore}>
                                    {
                                        Array(props.score).fill(0).map(i=>(
                                            <FaStar className="product-box__star-icon"/>
                                        ))
                                    }
                                    {
                                        Array(5 - props.score).fill(0).map(i=>(
                                            <FaRegStar className="product-box__star-icon"/>
                                        ))
                                    }
                                </div>
                            </div>
                            <span className={style.productDetailsPrice}>{props.price?.toLocaleString()} تومان</span>
                        </div>
                        <div className={style.productDetailsShortDescriptionWrapper}>
                            <span className={style.productDetailsShortDescriptionTitle}>درباره محصول:</span>
                            <p className={style.productDetailsShortDescription}>{props.shortDescription}</p>
                        </div>
                        <div className={`${style.productDetailsSubDetails} flex-between-center`}>
                            <div>
                                <span className={style.productDetailsSubDetailKey}>موجودی: </span>
                                <span className={style.productDetailsSubDetailValue}>{props.store}</span>
                            </div>
                            <div>
                                <span className={style.productDetailsSubDetailKey}>دیدگاه: </span>
                                <span className={style.productDetailsSubDetailValue}>{props.commentsLength || 0}</span>
                            </div>
                            <div >
                                <span className={style.productDetailsSubDetailKey}>تولید کننده: </span>
                                <span className={style.productDetailsSubDetailValue}>{props.company}</span>
                            </div>
                        </div>
                        <div className={style.productDetailsOrder}>
                            <div className={`${style.productDetailsOrderCount} flex-between-center`}>
                                <button className={style.productDetailsOrderCountMinus}>-</button>
                                <span>1</span>
                                <button className={style.productDetailsOrderCountPlus}>+</button>
                            </div>
                            <button className={style.productDetailsAddToCard}>
                                افزودن به علافه مندی ها
                                <i className="bi bi-suit-heart-fill productDetailsAddToCardIcon"></i>
                            </button>
                        </div>

                        <button className={style.productDetailsAddToBag}>
                            افزودن به سبد خرید
                            <i className="bi bi-cart3 productDetailsAddToBagIcon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
