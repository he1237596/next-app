/*
 * @Author: Chris
 * @Date: 2020-10-15 20:10:38
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-16 20:13:50
 * @Descripttion: **
 */
import { withRouter } from 'next/router'
import Layout from '../components/layout'
const About = ({ router }) => {
  const { query } = router
  return (
    <Layout>
      <div>
        关于页
      {query.id && <div>接收参数：{query.id}</div>}
      </div>
    </Layout>

  )
}
export default withRouter(About)