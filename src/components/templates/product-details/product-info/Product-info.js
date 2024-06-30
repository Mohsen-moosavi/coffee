import React from 'react'
import style from './../product-details.module.css'

export default function ProductInfo() {

    return (
        <section className={style.productDetails}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className={style.productDetailsCover}>
                            <img src="./images/products/cappochino-1.png" className={style.productDetailsImg} alt="cappochino" />
                            <div className={style.productDetailsImgCircle}>
                                <img src="./images/product-background.jpg" className={style.productDetailsImgCircleImg} alt="back" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8">
                        <div className={`${style.productDetailsMainInfo} flex-between-center`}>
                            <div className={style.productDetailsMainInfoWrapper}>
                                <h1 className={style.productDetailsTitle}>کاپوچینو بدون قند - 12.5 گرم بسته 20 عددی</h1>
                                <div className={style.productDetailsScore}>
                                    <i className="bi bi-star-fill product-box__star-icon"></i>
                                    <i className="bi bi-star-fill product-box__star-icon"></i>
                                    <i className="bi bi-star-fill product-box__star-icon"></i>
                                    <i className="bi bi-star-fill product-box__star-icon"></i>
                                    <i className="bi bi-star product-box__star-icon"></i>
                                </div>
                            </div>
                            <span className={style.productDetailsPrice}>24,000 تومان</span>
                        </div>
                        <div className={style.productDetailsShortDescriptionWrapper}>
                            <span className={style.productDetailsShortDescriptionTitle}>درباره محصول:</span>
                            <p className={style.productDetailsShortDescription}>
                                کاپوچینو بدون قند یکی از سالم ترین نوشیدنی های گرمی است که شما می توانید تجربه کنید. با
                                توجه به طعم بسیار خوب این نوشیدنی، می توانید لحظات بسیار زیبا و خاطره انگیزی را در کنار
                                هم دیگر تجره کنید. با اینکه این محصول قند بسیار کمی دارد، اما کاملا مزه دلچسب و بی نظیری
                                دارد که که از این نظر با همتا های قند دار خود برابری می کند.
                            </p>
                        </div>
                        <div className={`${style.productDetailsSubDetails} flex-between-center`}>
                            <div>
                                <span className={style.productDetailsSubDetailKey}>موجودی: </span>
                                <span className={style.productDetailsSubDetailValue}>13</span>
                            </div>
                            <div>
                                <span className={style.productDetailsSubDetailKey}>دیدگاه: </span>
                                <span className={style.productDetailsSubDetailValue}>9</span>
                            </div>
                            <div >
                                <span className={style.productDetailsSubDetailKey}>تولید کننده: </span>
                                <span className={style.productDetailsSubDetailValue}>شرکت ایران کافه</span>
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
