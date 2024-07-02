import React from 'react'
import style from './../../product-details.module.css'

export default function MoreDetailsTab({smell , weight , suitable}) {
    return (
        <table className={`table ${style.productTabsTable}`}>
            <tbody className="productTabs__body">
                <tr>
                    <td className={style.productTabsKey}>وزن</td>
                    <td className={style.productTabsValue}>{weight} گرم</td>
                </tr>
                <tr>
                    <td className={style.productTabsKey}>میزان بو</td>
                    <td className={style.productTabsValue}>{smell}</td>
                </tr>
                <tr>
                    <td className={style.productTabsKey}>مناسب برای</td>
                    <td className={style.productTabsValue}>{suitable}</td>
                </tr>
            </tbody>
        </table>
    )
}
