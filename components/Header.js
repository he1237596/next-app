/*
 * @Author: Chris
 * @Date: 2020-10-15 19:39:09
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 19:50:16
 * @Descripttion: **
 */
import Head from 'next/head'
const Header = ({title='next-app'}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
export default Header;