'use client'
import React, { useState } from 'react'
import { REGISTER_CONFIRM_CODE_PAGE, REGISTER_MAIN_PAGE } from '@/utils/Constant'
import style from './../../components/templates/login-register/Login.module.css'
import Link from 'next/link'

export default function paage() {

  const [pageMode, setPageMode] = useState(REGISTER_MAIN_PAGE)

  function changePhoneNuberHandler() {
    setPageMode(REGISTER_MAIN_PAGE)
  }

  function registerFormSubmitHandler() {
    setPageMode(REGISTER_CONFIRM_CODE_PAGE)
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
                    <input type="text" id="name-register-input" className={style.login__inputItem} placeholder="نام کاریری را وارد کنید..." />
                  </div>
                  <div className={`${style.login__inputGroup} flex-column-center-start`}>
                    <label htmlFor="phon-register-input" className={style.login__inputLable}>شماره تلفن</label>
                    <input type="text" id="phone-register-input" className={style.login__inputItem} placeholder="شماره تلفن را وارد کنید..." />
                  </div>
                  <div className={`${style.login__inputGroup} flex-column-center-start`}>
                    <label htmlFor="password-register-input" className={style.login__inputLable}>گذرواژه</label>
                    <input type="password" id="password-register-input" className={style.login__inputItem} placeholder="رمز عبوز را وارد کنید..." />
                  </div>
                  <div className={`${style.login__inputGroup} flex-column-center-start`}>
                    <label htmlFor="confirm-password-register-input" className={style.login__inputLable}>تکرار گذرواژه</label>
                    <input type="password" id="confirm-password-register-input" className={style.login__inputItem} placeholder="رمز عبوز را تکرار کنید..." />
                  </div>
                  <input type="submit" className={style.login__btnSubmit} value="ثبت نام" onClick={registerFormSubmitHandler} />
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
