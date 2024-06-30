import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='not-found'>
      <span className='not-found__404'>404</span>
      <p className='not-found__text'>not found page</p>
      <Link href="/" className='not-found__link'>بازگشت به صفحه اصلی</Link>
    </div>
  )
}
