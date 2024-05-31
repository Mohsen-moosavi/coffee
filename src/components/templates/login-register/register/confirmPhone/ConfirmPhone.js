'use client'
import React from 'react'
import style from './../../Login.module.css'

export default function ConfirmPhone({changePageMode}) {

    function goToMainPage(event){
        event.preventDefault()

        changePageMode()
    }

    return (
        <section className={style.loginSection}>
            <div className={style.loginSection__backFilter}>
                <div className="container">
                    <div className={`${style.login} flex-column-center-start`}>
                        <h1 className={style.login__title}>تایید شماره تلفن</h1>
                        <h2 className={style.login__subtitle}>لطفا کد ارسال شده به شماره 09382646981 را وارد کنید</h2>
                        <div className={`${style.login__inputGroup} flex-column-center-start`}>
                            <input type="number" className={style.login__inputItemSubmitCode} placeholder="کد تایید" />
                        </div>
                        <input type="submit" className={style.login__btnSubmit} value="تایید" />
                        <p className={style.login__registerText}>کد را دربافت نکردید؟<a href="#" className={style.login__registerLink}>ارسال مجدد کد</a></p>
                        <p className={style.login__registerText}>شماره اشتباه است؟<a href='#' className={style.login__registerLink} onClick={goToMainPage}>تغیر شماره تلفن</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
