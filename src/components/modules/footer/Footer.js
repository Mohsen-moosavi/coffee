import React from 'react'
import style from './Footer.module.css'
import { FaMap } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={style.footer}>
    <div className="container">
        <div className={style.footer__content}>
            <div className="row gy-5">
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="footer-item">
                        <h5 className={style.footerItem__title}>قهوه چی</h5>
                        <p className={style.footerItem__text}>شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه چی</p>
                        <ul className={style.footerItem__menu}>
                            <li>
                                <FaMap className={style.footerItem__icon}/>
                                <a href="#" className={style.footerItem__link}>تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان. خیابان ماگنولیا بلوک آ117</a>
                            </li>
                            <li className={style.footerItem__item}>
                                <BsFillTelephoneFill className={style.footerItem__icon}/>
                                <a href="#" className={style.footerItem__link}>پیگیری سفارشات : 02188305827</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 col-sm-3 col-lg-2">
                    <div className="footer-item">
                        <h5 className={style.footerItem__title}>دسترسی سریع</h5>
                        <ul className={style.footerItem__menu}>
                            <li>
                                <a href="#" className={style.footerItem__link}>فروشگاه</a>
                            </li>
                            <li>
                                <a href="#" className={style.footerItem__link}>مقالات</a>
                            </li>
                            <li>
                                <a href="#" className={style.footerItem__link}>سبد خرید</a>
                            </li>
                            <li>
                                <a href="#" className={style.footerItem__link}>علاقه مندی ها</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 col-sm-3 col-lg-2">
                    <div className="footer-item">
                        <h5 className={style.footerItem__title}>دسترسی سریع</h5>
                        <ul className={style.footerItem__menu}>
                            <li>
                                <a href="#" className={style.footerItem__link}>تماس با ما</a>
                            </li>
                            <li>
                                <a href="#" className={style.footerItem__link}>درباره ما</a>
                            </li>
                            <li>
                                <a href="#" className={style.footerItem__link}>مقالات</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-4 gy-5">
                    <div className="footer-item">
                        <div className="row justify-content-center">
                            <div className="col-2 col-lg-4">
                                <img src="./images/license1.png" className={style.footerItem__img} alt="enemad"/>
                            </div>
                            <div className="col-2 col-lg-4">
                                <img src="./images/license2.svg" className={style.footerItem__img} alt="etehadieh"/>
                            </div>
                            <div className="col-2 col-lg-4">
                                <img src="./images/license3.png" className={style.footerItem__img} alt="mellat"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.footer__bottom}>
            <p className={style.footer__copyRight}>تمام حقوق متعلق است به قهوه چی است | طراحی و اجرا نیلامارکتینگ</p>
        </div>
    </div>
</footer>
  )
}
