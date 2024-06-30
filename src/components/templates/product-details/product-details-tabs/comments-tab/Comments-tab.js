import React from 'react'
import style from './../../product-details.module.css'
import CommentItem from './comment-Item/Comment-item'

export default function CommentsTab() {
    return (
    <div className={`row ${style.commentsTabwrapper}`}>
            <div className="col-12 col-md-4">
                <div className={`${style.productTabsComments} flex-column-center-start`}>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                </div>
            </div>
            <div className="col-12 col-md-8">
                <div className={`${style.productTabsAddComment} ${style.commentsTabContact}`}>
                    <textarea rows="20" className={style.productTabsTextarea}
                        placeholder="لطفا نظر خود را بنویسید..."></textarea>
                    <input type="submit" value="ارسال نظر" className={style.productTabsSendBtn} />
                </div>
            </div>
        </div>
    )
}
