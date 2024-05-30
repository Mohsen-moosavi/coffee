import React from 'react'
import style from './Publicity.module.css'

export default function Publicity() {
    return (
        <section className={style.publicity}>
            <div className="container">
                <div className={style.publicity__content}>
                    <div className="row gy-3">
                        <div className="col-12 col-md-6 order-md-2">
                            <img src="./images/clubset1.jpg" className={style.publicity__image} alt="club" />
                        </div>
                        <div className={`col-12 col-md-6 flex-column-center-start ${style.publicity__wrapper}`}>
                            <div className={style.publicity__details}>
                                <h4 className={style.publicity__title}>خرید قهوه ، به سبک حرفه ای ها</h4>
                                <p className={style.publicity__subtitle}>زیبایی امروز رو با قهوه چی کامل کنید...</p>
                            </div>
                            <p className={style.publicity__description}>مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در
                                سال 2007 به عضویت انجمن تخصصی قهوه اروپا در آمده است و بسیاری از دوره‌های مربوط به فرآوری
                                قهوه را مدیریت این مجموعه به صورت تخصصی در کارگاه‌های آموزشی این انجمن و همچنین کارگاه‌های
                                تخصصی فرآوری قهوه به خصوص در زمینه بو دادن قهوه را در کشور آمریکا که از پیشگامان این صنعت
                                است را گذرانده است.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
