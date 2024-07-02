import Link from 'next/link'
import React from 'react'
import style from './not-found.module.css'

export default function NotFound() {
    return (
        <div className={style.notFound}>
          <span className={style.notFound__404}>404</span>
          <p className={style.notFound__text}>not found page</p>
          <Link href="/" className={style.notFound__link}>بازگشت به صفحه اصلی</Link>
        </div>
      )
}
