'use client'
import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import style from './ScollToTop.module.css'



export default function ScrollToTop() {

    const [isShowBtn , setIsShowBtn] = useState(false)

    function scrollToTopHandeler(){
        window.scrollTo({top : 0 , behavior : 'smooth'})
    }

    useEffect(()=>{
        function setShowingBtn(){
            if(window.scrollY > 120){
                setIsShowBtn(true)
            }else{
                setIsShowBtn(false)
            }
        }

        window.addEventListener('scroll' , setShowingBtn)

        return ()=> window.removeEventListener('scroll', setShowingBtn)
    },[])

  return (
    <div className={`${style.btn} ${isShowBtn ? style.btnShow : ''}`} onClick={scrollToTopHandeler}>
        <IoIosArrowUp className={style.btnIcon}/>
    </div>
  )
}
