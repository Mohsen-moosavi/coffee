import React from 'react'
import style from './Promot.module.css'

export default function Promot() {
    return (
        <section className={style.promot}>
            <div className='container'>
                <div className={style.promot__content}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="./images/Home32.jpg" className={style.promot__img} alt="pomote" />
                        </div>
                        <div className={`col-12 col-md-6 flex-column-center-start ${style.promot__details}`}>
                            <h4 className={style.promot__title}>چرا قهوه چی؟</h4>
                            <p className={style.promot__description}>برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
                                راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است .تجربه ای به قدمت چهار نسل
                                و ارتباط مستمر با مصرف کنندگان قهوه ضامن این ویژگیها است.</p>
                            <div className={`${style.promot__btnContaner} flex-between-center`}>
                                <a href="#" className={style.promot__btnMore}>بیشتر بخوانید</a>
                                <a href="#" className={style.promot__btnStore}>فروشگاه</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
