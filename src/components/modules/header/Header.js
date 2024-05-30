'use client'
import React, { useEffect, useRef, useState } from 'react'
import style from './Header.module.css'
import { IoMdClose } from "react-icons/io";
import { FaCaretLeft } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

export default function Header() {

    const [lightHeader , setLightHeader] = useState(true)

    useEffect(()=>{
        function changeStyleOfHeader(){
            const scrollValue = window.scrollY
            if(scrollValue!==0){
                setLightHeader(false)
            }else{
                console.log("hhhh")
                setLightHeader(true)
            }
        }

        window.addEventListener('scroll' , changeStyleOfHeader);
        return ()=> window.removeEventListener('scroll' , changeStyleOfHeader)
    },[])
    
    const headerMenu = useRef()
    const shadowElm = useRef()

      function openMobileMenu(){
        headerMenu.current.classList.add(style.header__menuOpen)
        console.log(style)
        shadowElm.current.classList.add(style.header__shadowMenuShow)
      }

      function closeMobileMenu(){
        headerMenu.current.classList.remove(style.header__menuOpen)
        shadowElm.current.classList.remove(style.header__shadowMenuShow)
      }
    return (
        <header className={`${style.header} ${lightHeader ? style.headerWhithoutBackground : ''}`}>
        <div className='container'>
        <div className={style.header__shadowMenu} ref={shadowElm} onClick={closeMobileMenu}></div>
            <div className={`${style.header__content} flex-between-center`}>
                <div className={style.header__menu} ref={headerMenu}>
                    <div className={style.header__mobileMenuLogo}>
                        <span className={style.header__mobileMenuLogoText}>قهوه چی</span>
                    </div>
                    <div onClick={closeMobileMenu}>
                        <IoMdClose className={style.header__closeMenuIcon}/>
                    </div>
                    <ul className={`${style.menu} flex-between-center`}>
                        <li className={style.menu__item}>
                            <a href="#" className={style.menu__link}>صفحه اصلی</a>
                        </li>
                        <li className={style.menu__item}>
                            <a href="#" className={style.menu__link}>فروشگاه</a>
                        </li>
                        <li className={style.menu__item}>
                            <a href="#" className={style.menu__link}>وبلاگ</a>
                        </li>
                        <li className={style.menu__item}>
                            <a href="#" className={style.menu__link}>تماس با ما</a>
                        </li>
                        <li className={style.menu__item}>
                            <a href="#" className={style.menu__link}>درباره ما</a>
                        </li>
                        <li className={style.menu__item}>
                            <a href="#" className={style.menu__link}>قوانین</a>
                        </li>
                        <li className={`${style.menu__item} ${style.menu__itemHasSubmenu}`}>
                            <a href="#" className={style.menu__link}>حساب کاربری</a>
                            <FaCaretLeft className={style.submenu__icon}/>
                            <ul className={`${style.submenu} flex-column-center-start`}>
                                <li className={style.submenu__item}>
                                    <a href="#" className={style.submenu__link}>سفارشات</a>
                                </li>
                                <li className={style.submenu__item}>
                                    <a href="#" className={style.submenu__link}>تیکت های پشتیبانی</a>
                                </li>
                                <li className={style.submenu__item}>
                                    <a href="#" className={style.submenu__link}>کامنت ها</a>
                                </li>
                                <li className={style.submenu__item}>
                                    <a href="#" className={style.submenu__link}>علاقه مندی ها</a>
                                </li>
                                <li className={style.submenu__item}>
                                    <a href="#" className={style.submenu__link}>جرئیات حساب کاربری</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={style.header__menuBtn}>
                    <LuMenu className={style.header__menuIcon} onClick={openMobileMenu}/>
                </div>
                <div className={style.logo}>
                    <h5 className={style.logo__text}>قهوه چی</h5>
                </div>
            </div>
        </div>
    </header>
    )
}
