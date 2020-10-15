/*
 * @Author: Chris
 * @Date: 2020-10-15 19:32:40
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-15 22:01:03
 * @Descripttion: **
 */
import React, { useState } from 'react';
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'
// import One from '../components/One'
const One = dynamic(import('../components/One')) // 懒加载组件(需要显示时才加载)

export default () => {
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