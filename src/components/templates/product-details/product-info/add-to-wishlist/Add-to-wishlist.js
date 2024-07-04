'use client'
import { showSwal } from '@/utils/helpers'
import React, { useEffect, useState } from 'react'
import style from './Add-to-wishlist.module.css'
import { FaHeart } from "react-icons/fa";

export default function AddToWishlist({ productID, userID }) {

    const [isProductInUserWishlist , setIsProductInUserWishlist] = useState(false)

    useEffect(()=>{
        if(userID){
            getUserWishlist()
        }
    },[])

    async function getUserWishlist(){
        const res = await fetch(`/api/wishlist/${userID}`)
        if(res.status == 200){
            const wishlist = await res.json()
            setIsProductInUserWishlist(wishlist.userWishlist.some(item=>item.productID === productID))
        }
    }

    async function addToWishlistHadler() {
        if (userID) {
            if(isProductInUserWishlist){
                const res = await fetch(`/api/wishlist/${productID}?user=${userID}`, {
                    method: 'DELETE'
                })

                if(res.status === 200){
                    setIsProductInUserWishlist(false)
                    return showSwal("محصول با موفقیت از لیست علاقه مندی ها حذف شد", 'success', "تایید")
                }
                return showSwal("محصول از لیست علاقه مندی ها حذف نشد", 'error', "تایید")
            }else{
                const res = await fetch("/api/wishlist", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({ userID, productID })
                })
    
                if (res.status === 409) {
                    return showSwal("محصول از قبل درون لیست علاقه مندی ها وجود دارد!", 'warning', "تایید")
                }
    
                if (res.status === 201) {
                    setIsProductInUserWishlist(true)
                    return showSwal("محصول به لیست علاقه مندی ها اضافه شد.", 'success', "تایید")
                }
    
                return showSwal("اضافه کردن محصول به لیست علاقه مندی ها با خطا مواجه شد!", 'error', "تایید")
            }
        } else {
            return showSwal("برای اضافه کردن محصول به لیست علاقه مندی ها ابتدا باید وارد حساب کاربری تان شوید!", 'warning', "تایید")
        }


    }

    return (
        <button className={isProductInUserWishlist ? style.productDetailsRemoveTheCard : style.productDetailsAddToCard} onClick={addToWishlistHadler}>
            افزودن به علافه مندی ها
            <FaHeart className={isProductInUserWishlist ? style.productDetailsRemoveTheCardIcon : style.productDetailsAddToCardIcon} />
        </button>
    )
}
