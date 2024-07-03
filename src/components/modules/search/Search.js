'use client'
import React, { useEffect, useState } from 'react'
import style from './Search.module.css'
import { IoIosSearch } from "react-icons/io";

export default function Search({searchItemHandler , items ,searchKey}) {

    const [searchWorld , setSearchWorld] = useState("")

    useEffect(()=>{
        if(searchWorld){
            const searchedItems = items.filter(item => item[searchKey].includes(searchWorld))
            searchItemHandler(searchedItems)
        }else{
            searchItemHandler(items)
        }

    } , [searchWorld])

    return (
        <section className={style.search}>
            <div className="container">
                <div className={`${style.search__content} flex-between-center`}>
                    <input type="text" placeholder="جستجوی محصول مورد نظر" className={style.landin__searchBtn} value={searchWorld} onChange={(event)=>setSearchWorld(event.target.value)}/>
                    <IoIosSearch className={style.landin__searchIcon}/>
                </div>
            </div>
        </section>
    )
}
