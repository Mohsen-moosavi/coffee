'use client'
import React, { useRef } from 'react'
import style from './../product-details.module.css'
import DescriptionTab from './description-tab/Description-tab'
import MoreDetailsTab from './more-details-tab/More-details-tab'
import CommentsTab from './comments-tab/Comments-tab'

export default function ProductDetailsTabs() {

    const tabLinks = useRef()
    const tabContent = useRef()

    function changeSelectedTab(event){
        if (event.target.tagName === 'SPAN') {
            for (const item in tabLinks.current.children) {
                tabLinks.current.children[item].classList?.remove(style.productNavItemActive)
            }
            event.target.parentElement.classList.add(style.productNavItemActive)
    
            for (const item in tabContent.current.children) {
                tabContent.current.children[item].classList?.remove(style.productTabsItemActive)
            }
    
            tabContent.current.children[`${event.target.dataset.item - 1}`].classList.add(style.productTabsItemActive)
        }
    }

    return (
        <section className={style.productTabs}>
            <div className="container">
                <ul className={style.productNav} onClick={(event)=>changeSelectedTab(event)} ref={tabLinks}>
                    <li className={`${style.productNavItem} ${style.productNavItemActive}`}>
                        <span className={style.productNavLink} data-item="1">توضیحات</span>
                    </li>
                    <li className={`${style.productNavItem}`}>
                        <span className={style.productNavLink} data-item="2">اطلاعات بیشتر</span>
                    </li>
                    <li className={`${style.productNavItem} `}>
                        <span className={style.productNavLink} data-item="3">نظرات</span>
                    </li>
                </ul>
                <div className={style.productTabsDetails} ref={tabContent}>
                    <div className={`${style.productTabsItem} ${style.productTabsItemActive}`}>
                        <DescriptionTab/>
                    </div>
                    <div className={style.productTabsItem}>
                        <MoreDetailsTab/>
                    </div>
                    <div className={style.productTabsItem}>
                        <CommentsTab/>
                    </div>
                </div>
            </div>
        </section>
    )
}
