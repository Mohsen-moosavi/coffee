import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import AboutUs from '@/components/templates/about-us/AboutUs'
import { isUserLogin } from '@/utils/auth'
import React from 'react'

export default async function page() {

    const user =await isUserLogin()

  return (
    <>
      <Header isUserLogin={!!user}/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
