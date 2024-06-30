import React from 'react'
import style from './../../product-details.module.css'

export default function MoreDetailsTab() {
    return (
        <table className={`table ${style.productTabsTable}`}>
            <tbody className="productTabs__body">
                <tr>
                    <td className={style.productTabsKey}>وزن</td>
                    <td className={style.productTabsValue}>12 گرم</td>
                </tr>
                <tr>
                    <td className={style.productTabsKey}>میزان بو</td>
                    <td className={style.productTabsValue}>متوسط</td>
                </tr>
                <tr>
                    <td className={style.productTabsKey}>مناسب برای</td>
                    <td className={style.productTabsValue}>عموم افراد</td>
                </tr>
            </tbody>
        </table>
    )
}
