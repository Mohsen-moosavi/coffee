import React from 'react'
import style from './../Login.module.css'
import Link from 'next/link'

export default function Login() {

    return (
        <section className={style.loginSection}>
            <div className={style.loginSection__backFilter}>
                <div className="container">
                    <div className={`${style.login} flex-column-center-start`}>
                        <h1 className={style.login__title}>ورود به حساب کاریری</h1>
                        <div className={`${style.login__inputGroup} flex-column-center-start`}>
                            <label htmlFor="identifire-login-input" className={style.login__inputLable}>نام کاربری | شماره تلفن</label>
                            <input type="text" id="identifire-login-input" className={style.login__inputItem} placeholder="نام کاریری | ایمیل را وارد کنید..." />
                        </div>
                        <div className={`${style.login__inputGroup} flex-column-center-start`}>
                            <label htmlhtmlFor="password-login-input" className={style.login__inputLable}>گذرواژه</label>
                            <input type="password" id="password-login-input" className={style.login__inputItem} placeholder="رمز عبوز را وارد کنید..." />
                        </div>
                        <div className={style.login__checkboxGroup}>
                            <input type="checkbox" id="login-reminder" className={style.login__checkboxItem} />
                            <label htmlFor="login-reminder" className={style.login__checkboxLabel}>مرا به خاطر داشته باش</label>
                        </div>
                        <input type="submit" className={style.login__btnSubmit} value="ورود" />
                        <p className={style.login__registerText}>هنوز ثبت نام نکرده اید؟ <Link href="/register" className={style.login__registerLink}>ایجاد حساب</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
