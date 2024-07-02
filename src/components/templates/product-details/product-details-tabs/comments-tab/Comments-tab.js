import React, { useEffect, useState } from 'react'
import style from './../../product-details.module.css'
import CommentItem from './comment-Item/Comment-item'
import { showSwal } from '@/utils/helpers'

export default function CommentsTab({ comments, user, productID, userName }) {

    const [commentScore, setCommentScore] = useState(-1)
    const [commentBody, setCommentBody] = useState("")

    async function addNewComment() {
        if (commentScore === -1) {
            return showSwal("ابتدا یک امتیاز به محصول بدهید!", "error", "تایید")
        }
        if (!commentBody.trim()) {
            return showSwal("برای ثبت کامنت ابتدا لازم است نظر خود را بنویسید!", 'error', "تایید")
        }

        const newComment = {
            username: userName,
            user,
            body: commentBody,
            product: productID,
            score: commentScore,
        }

        const res = await fetch("/api/comments", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })

        if (res.status === 201) {
            setCommentBody('')
            setCommentScore(-1)
            return showSwal("نظر شما با موفقیت برای ما ارسال شد.", 'success', "تایید")
        } else {
            return showSwal("ثبت نظر شما با خطا مواجه شد!", 'error', "تایید")
        }

    }

    return (
        <div className={`row ${style.commentsTabwrapper}`}>
            <div className={`${user ? 'col-12 col-md-4' : 'col-12'}`}>
                <div className={`${style.productTabsComments} flex-column-center-start`}>
                    {comments.length ? (
                        comments.map((comment, index) => {
                            if (comment.isShow)
                                return (<CommentItem comment={JSON.parse(JSON.stringify(comment))} key={index} />)
                        })) : (
                        <div className={style.commentsTabContact__notLogin}>
                            هنوز کامنتی وجود ندارد.
                        </div>
                    )
                    }
                </div>
            </div>
            {
                user ? (
                    <div className="col-12 col-md-8">
                        <div className={`${style.productTabsAddComment} ${style.commentsTabContact}`}>
                            <select className={style.productTabsScoreField} defaultValue={-1} onChange={(event) => setCommentScore(event.target.value)}>
                                <option value={-1} className={style.productTabsScoreItem}>لطفا نظر خود را در رابطه با محصول بیان کنید.</option>
                                <option value={1} className={style.productTabsScoreItem}>خیلی بد</option>
                                <option value={2} className={style.productTabsScoreItem}>بد</option>
                                <option value={3} className={style.productTabsScoreItem}>متوسط</option>
                                <option value={4} className={style.productTabsScoreItem}>خوب</option>
                                <option value={5} className={style.productTabsScoreItem}>عالی</option>
                            </select>
                            <textarea rows="20" className={style.productTabsTextarea}
                                value={commentBody}
                                onChange={(event) => setCommentBody(event.target.value)}
                                placeholder="لطفا نظر خود را بنویسید..."></textarea>
                            <input type="submit" value="ارسال نظر" className={style.productTabsSendBtn} onClick={addNewComment} />
                        </div>
                    </div>
                ) : (
                    <div className='col-12'>
                        <div className={style.commentsTabContact__notLogin}>
                            برای نوشتن کامنت ابتدا وارد حساب خود شوید!
                        </div>
                    </div>
                )
            }

        </div >
    )
}
