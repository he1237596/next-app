/*
 * @Author: Chris
 * @Date: 2020-10-15 17:55:43
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 18:00:51
 * @Descripttion: **
 */
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        这是首页噢
      </main>
    </div>
  )
}
