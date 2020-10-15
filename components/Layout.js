/*
 * @Author: Chris
 * @Date: 2020-10-15 19:34:08
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 19:47:24
 * @Descripttion: **
 */
import Header from './Header';

export default ({children})=>{
  return (<div>
    <Header></Header>
    {children}
    <fotter></fotter>
  </div>)
}