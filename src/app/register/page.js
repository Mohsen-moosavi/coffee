'use client'
import React, { useState } from 'react'
import { REGISTER_CONFIRM_CODE_PAGE, REGISTER_MAIN_PAGE } from '@/utils/Constant'
import style from './../../components/templates/login-register/Login.module.css'
import Link from 'next/link'
import { showSwal } from '@/utils/helpers'
import { nameValidator, passwordValidator, phoneValidator } from '@/utils/validators'

export default function paage() {

  const [pageMode, setPageMode] = useState(REGISTER_MAIN_PAGE)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function changePhoneNuberHandler() {
    setPageMode(REGISTER_MAIN_PAGE)
  }

  function registerFormSubmitHandler() {
    setPageMode(REGISTER_CONFIRM_CODE_PAGE)
  }

  async function signup(event) {
    event.preventDefault()

    const user = { name, password, phone, confirmPassword }

    if(!name.trim().length || !phone.trim().length || !password.trim().length || !confirmPassword.trim().length){
      showSwal("پر کردن تمام موارد برای ادامه فرایند الزامی است!", 'error', "تلاش مجدد")
      return false
    }

    if (password !== confirmPassword) {
      showSwal("رمز عبور و تایید رمز عبور با هم مطابقت ندارند.", 'error', "تلاش مجدد")
      return false
    }


    if (!nameValidator(name)) {
      showSwal("نام کاربری وارد شده معتبر نیست", 'error', "تلاش مجدد")
      return false
    }
    if (!phoneValidator(phone)) {
      showSwal("تلفن وارد شده معتبر نیست", 'error', "تلاش مجدد")
      return false
    }
    if (!passwordValidator(password)) {
      showSwal("پسورد وارد شده امن نیست!", 'error', "تلاش مجدد")
      return false
    }


    const res = await fetch("/api/auth/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(user)
    })


    if (res.status === 201) {
      showSwal("ثبت نام با موفقیت انجام شد.", 'success', "تایید")
      setPageMode(REGISTER_CONFIRM_CODE_PAGE)
    }else {
      console.log(await res.json())
      showSwal("خطایی رخ داده. لطفا دوباره تلاش کنید.","error","تلاش مجدد")
    }
  }

  return (
    <>

      {pageMode === REGISTER_MAIN_PAGE ?
        (
          <section className={style.loginSection}>
            <div className={style.loginSection__backFilter}>
              <div className="container">
                <div className={`${style.login} flex-column-center-start`}>
                  <h1 className={style.login__title}>ساختن حساب کاریری</h1>
                  <div className={`${style.login__inputGroup} flex-column-center-start`}>
                    <label htmlFor="name-register-input" className={style.login__inputLable}>نام کاربری</label>
                    <input type="text" id="name-register-input" className={style.login__inputItem} value={name} onChange={(e) => setName(event.target.value)} placeholder="نام کاریری را وارد کنید..." />
                  </div>
                  <div className={`${style.login__inputGroup} flex-column-center-start`}>
                    <label htmlFor="phon-register-input" className={style.login__inputLable}>شماره تلفن</label>
                    <input type="text" id="phone-register-input" className={style.login__inputItem} value={phone} onChange={(e) => setPhone(event.target.value)} placeholder="شماره تلفن را وارد کنید..." />
                  </div>
                  <div className={`${style.login__inputGroup} flex-column-center-start`}>
                    <label htmlFor="password-register-input" className={style.login__inputLable}>گذرواژه</label>
                    <input type="password" id="password-register-input" className={style.login__inputItem} value={password} onChange={(e) => setPassword(event.target.value)} placeholder="رمز عبوز را وارد کنید..." />
                  </div>
                  <div className={`${style.login__inputGroup} flex-column-center-start`}>
                    <label htmlFor="confirm-password-register-input" className={style.login__inputLable}>تکرار گذرواژه</label>
                    <input type="password" id="confirm-password-register-input" className={style.login__inputItem} value={confirmPassword} onChange={(e) => setConfirmPassword(event.target.value)} placeholder="رمز عبوز را تکرار کنید..." />
                  </div>
                  <input type="submit" className={style.login__btnSubmit} value="ثبت نام" onClick={signup} />
                  <p className={style.login__registerText}>قبلا ثبت نام کرده اید؟<Link href="/login" className={style.login__registerLink}>ورود</Link></p>
                </div>
              </div>
            </div>
          </section>
        ) :
        (
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
                  <p className={style.login__registerText}>شماره اشتباه است؟<a href='#' className={style.login__registerLink} onClick={changePhoneNuberHandler}>تغیر شماره تلفن</a></p>
                </div>
              </div>
            </div>
          </section>
        )
      }
    </>
  )


}
