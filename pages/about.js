/*
 * @Author: Chris
 * @Date: 2020-10-15 20:10:38
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 20:46:27
 * @Descripttion: **
 */
import {withRouter} from 'next/router'
const About = ({router}) => {
  const {query} = router
  return (
    <div>
      关于页
      {query.id && <div>接收参数：{query.id}</div>}
    </div>
  )
}
console.log(withRouter)
export default withRouter(About)