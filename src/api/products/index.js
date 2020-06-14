import axios from 'axios';

// 创建商品
const postProduct = form => axios.post('/api/v1/products', form).then(res => res.data);

// 读商品详情
const showProduct = id => axios.get(`/api/v1/products/${id}`).then(res => res.data);

// 读取商品列表
const listProducts = () => axios.get('/api/v1/products').then(res => res.data);

//读取不同分类商品
const listCategories = category_id =>axios.get(`/api/v1/categories/${category_id}`).then(res => res.data);

//读取商品的图片
const showPictures = id =>axios.get(`/api/v1/pictures/${id}`).then(res => res.data);

//搜索商品
const searchProducts = form => axios.post('/api/v1/searches',form).then(res => res.data);

export {
  postProduct,
  showProduct,
  listProducts,
  listCategories,
  showPictures,
  searchProducts,
};
