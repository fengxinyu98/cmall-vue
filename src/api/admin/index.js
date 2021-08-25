/*
 * @Descripttion:调用后端用户接口的函数
 * @Author: congz
 * @Date: 2020-06-11 09:39:58
 * @LastEditors: congz
 * @LastEditTime: 2020-08-19 10:16:06
 */

import axios from 'axios'

// 管理员注册
const postAdmin = form =>
  axios.post('/api/v2/admin/register', form).then(res => res.data)

// 管理员登录
const postAdminLogin = form =>
  axios.post('/api/v2/admin/login', form).then(res => res.data)

//修改管理员信息
const updateAdmin = form => axios.put('/api/v2/admin', form).then(res => res.data)

export {
  postAdmin,
  postAdminLogin,
  updateAdmin
}
