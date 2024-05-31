'use client'
import React from 'react'
import style from './../../Login.module.css'
import Link from 'next/link'

export default function Register({changePageMode}) {

    function formSubmitHandler(event){
        event.preventDefault()

        changePageMode()
    }

    return (
        <section className={style.loginSection}>
        <div className={style.loginSection__backFilter}>
            <div className="container">
                <div className={`${style.login} flex-column-center-start`}>
                    <h1 className={style.login__title}>ساختن حساب کاریری</h1>
                    <div className={`${style.login__inputGroup} flex-column-center-start`}>
                        <label for="identifire-login-input" className={style.login__inputLable}>نام کاربری</label>
                        <input type="text" id="identifire-login-input" className={style.login__inputItem} placeholder="نام کاریری را وارد کنید..." />
                    </div>
                    <div className={`${style.login__inputGroup} flex-column-center-start`}>
                        <label for="identifire-login-input" className={style.login__inputLable}>شماره تلفن</label>
                        <input type="text" id="identifire-login-input" className={style.login__inputItem} placeholder="شماره تلفن را وارد کنید..." />
                    </div>
                    <div className={`${style.login__inputGroup} flex-column-center-start`}>
                        <label for="password-login-input" className={style.login__inputLable}>گذرواژه</label>
                        <input type="password" id="password-login-input" className={style.login__inputItem} placeholder="رمز عبوز را وارد کنید..." />
                    </div>
                    <div className={`${style.login__inputGroup} flex-column-center-start`}>
                        <label for="password-login-input" className={style.login__inputLable}>تکرار گذرواژه</label>
                        <input type="password" id="password-login-input" className={style.login__inputItem} placeholder="رمز عبوز را تکرار کنید..." />
                    </div>
                    <input type="submit" className={style.login__btnSubmit} value="ثبت نام" onClick={formSubmitHandler}/>
                    <p className={style.login__registerText}>قبلا ثبت نام کرده اید؟<Link href="/login" className={style.login__registerLink}>ورود</Link></p>
                </div>
            </div>
        </div>
    </section>
    )
}
