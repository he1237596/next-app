/*
 * @Author: Chris
 * @Date: 2020-10-15 19:34:08
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 20:14:25
 * @Descripttion: **
 */
import Header from './Header';

export default ({children})=>{
  return (<div>
    <Header></Header>
    {children}
    <footer></footer>
  </div>)
}