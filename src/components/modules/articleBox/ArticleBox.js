import React from 'react'
import style from './Article.module.css'

export default function ArticleBox() {
    return (
        <div className={style.articleBox}>
            <div className={style.articleBox__cover}>
                <img src="./images/coffee1.jpg" className={style.articleBox__img} alt="article"/>
                    <div className={style.articleBox__shadow}></div>
                    <h6 className={style.articleBox__title}>مصرف قهوه به همراه شیر برای کاهش التهاب بیندس بسنی تسنبیا
                        تبسایت ن ساتتیباسنل</h6>
            </div>
            <div className={`${style.articleBox__content} flex-between-center`}>
                <span className={style.articleBox__date}>3 اردیبهشت 1401</span>
                <span className={style.articleBox__writer}>سید محسن موسوی</span>
            </div>
        </div>
    )
}
