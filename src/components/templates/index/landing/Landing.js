import React from 'react'
import style from './Landing.module.css'
import { IoIosSearch } from "react-icons/io";

export default function Landing() {
    return (
        <section className={`${style.landing} flex-between-center`}>
            <div className="container">
                <div className={style.landing__content}>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className={`${style.landing__right} flex-column-center-start`}>
                                <h1 className={style.landing__title}>بزرگ ترین <br />
                                    <bold className={style.landing__boldTitle}>فروشگاه قهوه درجه یک</bold>
                                </h1>
                                <p className={style.landing__subtitle}>قهوه چی، مرکز تخصصی ارائه قهوه و انواع نوشیدنی های گرم <br />با
                                    قهوه چی، خستگی را از تن خارج کن </p>
                                <div className={style.landin__search}>
                                    <input type="text" placeholder="جستجوی محصول مورد نظر" className={style.landin__searchBtn} />
                                    <div className={style.landin__searchIconWrapper}>
                                        <IoIosSearch className={style.landin__searchIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
