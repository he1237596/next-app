/*
 * @Author: Chris
 * @Date: 2020-10-15 19:34:08
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-16 20:19:12
 * @Descripttion: **
 */
import Header from './Header';
import Router from 'next/router'

Router.events.on('routeChangeStart',(url) => {
  console.log(url)
  if(url === '/about') {
    location.href = '/nopermission'
  }
})

export default ({children})=>{
  return (<div>
    <Header></Header>
    {children}
    <footer></footer>
  </div>)
}