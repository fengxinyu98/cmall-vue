/*
 * 入口文件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-04 23:38:41
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
// 导入极验

// 绑定到原型
Vue.prototype.$initGeet=require('@/assets/gt.js');

// 全局函数及变量
import Global from './Global';
Vue.use(Global);



// 全局请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // 跳转error页面
    router.push({ path: "/error" });
    return Promise.reject(error);
  }
);
// 全局响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.data.code === "401") {
      // 401表示没有登录
      // 提示没有登录
      Vue.prototype.notifyError(res.data.msg);
      // 修改vuex的showLogin状态,显示登录组件
      store.dispatch("setShowLogin", true);
    }
    if (res.data.code === "500") {
      // 500表示服务器异常
      // 跳转error页面
      router.push({ path: "/error" });
    }
    return res;
  },
  error => {
    // 跳转error页面
    router.push({ path: "/error" });
    return Promise.reject(error);
  }
);

// 全局拦截器,在进入需要用户权限的页面前校验是否已经登录
router.beforeResolve((to, from, next) => {
  const loginUser = store.state.user.user;
  // 判断路由是否设置相应校验用户权限
  if (to.meta.requireAuth) {
    if (!loginUser) {
      // 没有登录，转到登录界面
      router.push({
        name: 'Login'
        });
      if (from.name == null) {
        //此时，是在页面没有加载，直接在地址栏输入链接，进入需要登录验证的页面
        next("/");
        return;
      }
      // 终止导航
      next(false);
      return;
    }
  }
  next();
});

// 相对时间过滤器,把时间戳转换成时间
// 格式: 2020-02-25 21:43:23
Vue.filter('dateFormat', (cjsj) => {
  if (cjsj / 10000000000 <= 1) {
    cjsj = cjsj * 1000;
  }
  var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + " ";
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  return Y + M + D + h + m + s;
});

//全局组件
import MyMenu from './components/MyMenu';
Vue.component(MyMenu.name, MyMenu);
import MyList from './components/MyList';
Vue.component(MyList.name, MyList);
import MyLogin from './components/MyLogin';
Vue.component(MyLogin.name, MyLogin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')