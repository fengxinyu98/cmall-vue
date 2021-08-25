/*
 * @Descripttion:调用后端商品接口的函数
 * @Author: congz
 * @Date: 2020-06-10 18:59:36
 * @LastEditors: congz
 * @LastEditTime: 2020-08-12 20:57:07
 */

import axios from 'axios'

// 读商品详情
const showProduct = id =>
  axios.get(`/api/v1/products/${id}`).then(res => res.data)

// 读取商品列表, category_id = 0 时代表读取所有商品
const listProducts = (category_id, start, limit) =>
  axios
    .get('/api/v1/products', { params: { category_id, start, limit } })
    .then(res => res.data)

//读取商品的图片
const showPictures = id => axios.get(`/api/v1/imgs/${id}`).then(res => res.data)

//搜索商品
const searchProducts = form =>
  axios.post('/api/v1/searches', form).then(res => res.data)

// 排行榜详情
const showRanking = () => axios.get('/api/v1/ranking/').then(res => res.data)

// 创建商品
const createProducts = form =>
  axios.post('/api/v2/products', form).then(res => res.data)

// 删除商品
const deleteProduct = id =>
  axios.delete(`/api/v2/products/${id}`).then(res => res.data)

// 更改商品
const updateProducts = form =>
  axios.put('/api/v2/products', form).then(res => res.data)

// 创建商品图片
const createPictures = form =>
  axios.post('/api/v2/imgs', form).then(res => res.data)



export {
  showProduct,
  listProducts,
  showPictures,
  searchProducts,
  showRanking,
  createProducts,
  deleteProduct,
  updateProducts,
  createPictures
}
