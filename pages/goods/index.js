/*
 * @Author: Chris
 * @Date: 2020-10-15 20:10:38
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 20:51:18
 * @Descripttion: **
 */
import {withRouter} from 'next/router'
import Link from 'next/link'
import Router from 'next/router'
const Goods = ({router}) => {
  const {query} = router

  return (
    <div>
      商品页
      {query.id && <div>接收参数：{query.id}</div>}
      <Link href='/goods/detail' prefetch>去详情页</Link>
      <button onClick={()=>Router.push({pathname: '/goods/detail', prefetch: true})}>去详情页</button>
    </div>
  )
}
export default withRouter(Goods)