import React from 'react'
import style from './ProductCard.module.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BsFillCartDashFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";


export default function ProductCard() {
    return (
        <div className={style.productBox}>
            <div className={style.productBox__cover}>
                <img src="./images/coffee1.jpg" className={style.productBox__img} alt="coffee" />
                <div className={style.productBox__coverShadow}></div>
            </div>
            <span className={style.productBox__title}>قهوه لاته</span>
            <div className={style.productBox__score}>
            <FaStar className={style.productBox__starIcon}/>
            <FaStar className={style.productBox__starIcon}/>
            <FaStar className={style.productBox__starIcon}/>
            <FaStar className={style.productBox__starIcon}/>
            <CiStar className={style.productBox__starIcon}/>
            </div>
            <div className={`${style.productBox__bottom} flex-between-center`}>
                <div className={`${style.productBox__likeBag} flex-between-center`}>
                    <BsFillCartDashFill className={style. productBox__heartIcon}/>
                    <FaHeart className={`${style.productBox__likeIcon} ${style.productBox__likeIconLiked}`} />
                </div>
                <span className={style.productBox__price}>65000 تومان</span>
            </div>
        </div>
    )
}
