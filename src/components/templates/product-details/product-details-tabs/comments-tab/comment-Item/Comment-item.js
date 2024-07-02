import React from 'react'
import style from './../../../product-details.module.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Image from 'next/image';

export default function CommentItem({comment}) {
    return (
        <div className={style.productComment}>
            <div className={style.productCommentUserAndScore}>
                <div className={style.productCommentHead}>
                    <Image src={'/' + "images/shahin.jpg"} width={500} height={400} className={style.productCommentImg} alt="user" />
                    <div className={style.productCommentCommentInfo}>
                        <span className={style.productCommentUserName}>{comment.username}</span>
                        <span className={style.productCommentCommentDate}>{new Date(comment.date).toLocaleDateString('fa-IR')}</span>
                    </div>
                </div>
                <div className={style.productCommentScoreWrapper}>
                    {Array(comment.score).fill(0).map((i, index) => (
                        <FaStar className={style.productCommentScore} />
                    ))}
                    {Array(5 - comment.score).fill(0).map((i, index) => (
                        <FaRegStar className={style.productCommentScore} />
                    ))}
                </div>
            </div>
            <div className={style.productCommentBody}>
                <p className={style.productCommentCommentBody}>{comment.body}</p>
            </div>
        </div>
    )
}
