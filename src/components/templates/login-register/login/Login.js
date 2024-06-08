'use client'
import React, { useState } from 'react'
import style from './../Login.module.css'
import Link from 'next/link'
import { showSwal } from '@/utils/helpers'
import { passwordValidator, phoneValidator } from '@/utils/validators'
import { useRouter } from 'next/navigation'
import swal from 'sweetalert'

export default function Login() {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    async function loginHandler() {
        if (!phone.trim().length) {
            return showSwal("لطفا شماره تلفن خود را وارد کنید.", 'error', "تلاش مجدد")
        }

        if (!password.trim().length) {
            return showSwal("لطفا پسورد خود را وارد کنید.", 'error', "تلاش مجدد")
        }

        if (!phoneValidator(phone)) {
            return showSwal("لطفا یک شماره تلفن معتبر وارد کنید.", 'error', "تلاش مجدد")
        }

        if (!passwordValidator(password)) {
            return showSwal("پسورد وارد شده معتبر نمی باشد.", 'error', "تلاش مجدد")
        }

        const res = await fetch("/api/auth/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone, password })
        })

        if (res.status === 401 || res.status === 422) {
            return showSwal("تلفن یا پسورد وارد شده صحیح نیستند.", 'error', "تلاش مجدد")
        } else if (res.status === 200) {
            return swal({
                title : "شما با موفقیت وارد شدید.",
                icon : "success",
                buttons : "تایید"
            }).then(()=>{
                router.replace("/")
            })
        }
    }


    return (
        <section className={style.loginSection}>
            <div className={style.loginSection__backFilter}>
                <div className="container">
                    <div className={`${style.login} flex-column-center-start`}>
                        <h1 className={style.login__title}>ورود به حساب کاریری</h1>
                        <div className={`${style.login__inputGroup} flex-column-center-start`}>
                            <label htmlFor="identifire-login-input" className={style.login__inputLable}>شماره تلفن</label>
                            <input type="text" id="identifire-login-input" className={style.login__inputItem} value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="شماره تلفن را وارد کنید..." />
                        </div>
                        <div className={`${style.login__inputGroup} flex-column-center-start`}>
                            <label htmlFor="password-login-input" className={style.login__inputLable}>گذرواژه</label>
                            <input type="password" id="password-login-input" className={style.login__inputItem} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="رمز عبوز را وارد کنید..." />
                        </div>
                        <div className={style.login__checkboxGroup}>
                            <input type="checkbox" id="login-reminder" className={style.login__checkboxItem} />
                            <label htmlFor="login-reminder" className={style.login__checkboxLabel}>مرا به خاطر داشته باش</label>
                        </div>
                        <input type="submit" className={style.login__btnSubmit} value="ورود" onClick={loginHandler} />
                        <p className={style.login__registerText}>هنوز ثبت نام نکرده اید؟ <Link href="/register" className={style.login__registerLink}>ایجاد حساب</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
