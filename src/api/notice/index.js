/*
 * @Descripttion:调用后端md接口的函数
 * @Author: congz
 * @Date: 2020-06-12 23:26:38
 * @LastEditors: congz
 * @LastEditTime: 2020-08-04 11:13:59
 */

import axios from 'axios'

// 公告详情
const showNotice = () => axios.get('/api/v1/notices').then(res => res.data)

// 创建公告
const postNotice = form =>
    axios.post('/api/v2/notices', form).then(res => res.data)

// 更新公告
const updateNotice = form =>
    axios.put('/api/v2/notices', form).then(res => res.data)

export { showNotice, postNotice, updateNotice }
