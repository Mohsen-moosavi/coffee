import React from 'react'
import style from './../../../product-details.module.css'

export default function CommentItem() {
    return (
        <div className={style.productComment}>
            <div className={style.productCommentHead}>
                <img src="./images/shahin.jpg" className={style.productCommentImg} alt="user" />
                <div className={style.productCommentCommentInfo}>
                    <span className={style.productCommentUserName}>شاهین مرادی</span>
                    <span className={style.productCommentCommentDate}>1403/01/05</span>
                </div>
            </div>
            <div className={style.productCommentBody}>
                <p className={style.productCommentCommentBody}>
                    این قهوه مزه و بوی بسیار خوبی داشت. من که واقعا راضی بودم.
                </p>
            </div>
        </div>
    )
}
