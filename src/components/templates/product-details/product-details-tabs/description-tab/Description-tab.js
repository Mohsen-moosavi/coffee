import React from 'react'
import style from './../../product-details.module.css'


export default function DescriptionTab({longDescription}) {
  return (
    <p className={style.productTabsCompleteDescription}>{longDescription}</p>
  )
}
