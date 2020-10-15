/*
 * @Author: Chris
 * @Date: 2020-10-15 19:32:40
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 22:22:18
 * @Descripttion: **
 */
import React, { useState } from 'react';
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'
import axios from 'axios'
// import One from '../components/One'
const One = dynamic(import('../components/One')) // 懒加载组件(需要显示时才加载)
const User = ({id}) => {
  console.log(id)
  const [time, setTime] = useState(Date.now())
  const [visible, setVisible] = useState(false);
  const changeTime = async () => {
    const moment = await import('moment');// 懒加载模块
    setTime(moment.default().format());
    setVisible(true)
  }
  return (<Layout>
    这是个人中心页
    {visible&&<One />}
    <div>time: {time}</div>
    <button onClick={changeTime}>改变时间格式</button>
  </Layout>)
}
// 异步处理
User.getInitialProps = async () => {
  const result = new Promise(resolve => {
    axios.get('http://52.81.146.173:60014/api/swagger.json').then(res => {
      resolve({ id: 1 })
    })
  })
  return await result;
}
export default User;