'use client'
import React, { useEffect, useState } from 'react'
import style from './Pagination.module.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function Pagination({ itemsCount, itemsCountInEveryPage ,itemsHandler ,items }) {
    
    const btnCount = Math.ceil(itemsCount / itemsCountInEveryPage)
    const [activePage, setActivePage] = useState(1)

    const [startNumber , setStartNumber] = useState(0)
    const [endNumber , setEndNumber] = useState(startNumber + 6)

    useEffect(()=>{
        itemsHandler(items.slice(startNumber, endNumber))
    },[activePage])

    useEffect(()=>{
        itemsHandler(items.slice(startNumber, endNumber))
    },[items])

    function prevPageHadler(){
        setStartNumber((activePage - 2) * itemsCountInEveryPage)
        setEndNumber(((activePage - 2) * itemsCountInEveryPage) +6)
        if(activePage > 1){
            setActivePage(prevValue=> prevValue - 1)
        }
    }

    function changePageHadler(forvardPage){
        setStartNumber((forvardPage - 1) * itemsCountInEveryPage)
        setEndNumber(((forvardPage - 1) * itemsCountInEveryPage) +6)
        setActivePage(forvardPage)
    }

    function forvardPageHadler(){
        setStartNumber((activePage) * itemsCountInEveryPage)
        setEndNumber(((activePage) * itemsCountInEveryPage) +6)
        if(activePage < btnCount){
            setActivePage(prevValue=> prevValue + 1)
        }
    }

    return (
        <section className={style.pagination}>
            <div className="container">
                <div className={style.pagination__content}>

                    {activePage !== 1 && (
                        <span className={style.pagination__btn} onClick={prevPageHadler}>
                            <FaArrowRight />
                        </span>
                    )}
                    {Array(btnCount).fill(0).map((i, index) => (
                        <span 
                            className={`${style.pagination__btn} ${activePage === (index + 1) ? style.pagination__btnActive : ''}`}
                            key={index}
                            onClick={()=>changePageHadler(index + 1)}    
                        >{index + 1}</span>
                    ))}
                    {activePage !== btnCount && (
                        <span className={style.pagination__btn} onClick={forvardPageHadler}>
                            <FaArrowLeft />
                        </span>
                    )}
                </div>
            </div>
        </section>
    )
}
