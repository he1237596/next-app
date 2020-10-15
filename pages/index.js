/*
 * @Author: Chris
 * @Date: 2020-10-15 17:55:43
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 20:48:24
 * @Descripttion: **
 */
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  const jump = (pathname) => {
    Router.push({pathname, query: {id: 1}}) // 传参
  }
  return (
    <div className={styles.container}>
        这是首页
      <main className={styles.main}>
        <p>路由跳转</p>
        <Link href={{pathname: 'user'}}><a>Link去个人中心页</a></Link>
        <Link href='/goods'><a>Link去商品页</a></Link>
        <Link href='/goods/detail'><a>Link去详情页</a></Link>
        <Link href='/goods/detail' as='/g/d' ><a>Link去详情页（路径缩写：读取pathname时也是缩写）</a></Link>
        <br/>
        <button onClick={() => jump('/goods')}>Router去商品页</button>
        <button onClick={() => jump('/goods/detail')}>Router去详情页</button>
      </main>
      <main className={styles.main}>
        <p>路由传参</p>
        <Link href={{pathname: 'user', query: {id: 1}}} prefetch><a>Link去个人中心页</a></Link>
        <Link href='/goods?id=1'><a>Link去商品页</a></Link>
        <Link href='/goods/detail?id=1'><a>Link去详情页</a></Link>
        <button onClick={() => jump('/goods')}>Router去商品页</button>
        <button onClick={() => jump('/goods/detail')}>Router去详情页</button>
      </main>
      <p>ggggg</p>
    </div>
  )
}
