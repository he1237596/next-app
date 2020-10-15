/*
 * @Author: Chris
 * @Date: 2020-10-15 20:10:38
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 20:44:25
 * @Descripttion: **
 */
import {withRouter} from 'next/router'
const Detail = ({router}) => {
  const {query} = router
  return (
    <div>
      详情页
      {query.id && <div>接收参数：{query.id}</div>}
    </div>
  )
}
console.log(withRouter)
export default withRouter(Detail)