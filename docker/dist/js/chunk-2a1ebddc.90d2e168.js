(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a1ebddc"],{"34b8":function(t,e,a){},"46e0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"centerMenu",attrs:{id:"centerMenu"}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-content"},[a("div",{staticClass:"menu-part"},[a("p",{staticClass:"submenu"},[t._v("个人中心")]),a("ul",{staticClass:"menu-ul"},[a("li",[a("router-link",{staticClass:"menu-a",attrs:{to:"/center"}},[t._v("我的个人中心")])],1),a("li",[a("router-link",{staticClass:"menu-a",attrs:{to:"/favorite"}},[t._v("我的收藏")])],1),a("li",[a("router-link",{staticClass:"menu-a",attrs:{to:"/order"}},[t._v("我的订单")])],1),a("li",[a("router-link",{staticClass:"menu-a",attrs:{to:"/cart"}},[t._v("我的购物车")])],1)]),a("p",{staticClass:"submenu"},[t._v("账户管理")]),a("ul",{staticClass:"menu-ul"},[a("li",[a("router-link",{staticClass:"menu-a",attrs:{to:"/user/details"}},[t._v("个人信息")])],1),a("li",[a("router-link",{staticClass:"menu-a",attrs:{to:""}},[t._v("修改密码")])],1),a("li",[a("router-link",{staticClass:"menu-a",attrs:{to:"/user/address"}},[t._v("收货地址")])],1)]),a("p",{staticClass:"submenu"},[t._v("关于")]),a("ul",{staticClass:"menu-ul"},[a("li",[a("router-link",{staticClass:"menu-a",attrs:{to:"/about"}},[t._v("关于网站")])],1),a("li",[a("a",{staticClass:"menu-a",attrs:{href:"https://github.com/congz666/cmall-vue",target:"_blank"}},[t._v("项目地址(前端)")])]),a("li",[a("a",{staticClass:"menu-a",attrs:{href:"https://github.com/congz666/cmall-go",target:"_blank"}},[t._v("项目地址(后端)")])])])]),a("div",{staticClass:"extra"})])])])],1)},r=[],i={name:"CenterMenu",data:function(){return{}},methods:{}},n=i,l=(a("5fca"),a("4023")),o=Object(l["a"])(n,s,r,!1,null,"52967438",null);e["a"]=o.exports},"5fca":function(t,e,a){"use strict";var s=a("d441"),r=a.n(s);r.a},"7c87":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details",attrs:{id:"details",name:"details"}},[a("div",{staticClass:"details-layout"},[a("el-row",{attrs:{gutter:10}},[a("div",[a("CenterMenu")],1),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"details-content"},[a("div",{staticClass:"extra"}),a("div",{staticClass:"details-title"},[a("p",[t._v("个人信息")])]),a("div",{staticClass:"details-form"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"头像:"}},[a("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{action:"",label:"描述","before-upload":t.fnBeforeUpload,"http-request":t.fnUploadRequest,"show-file-list":!1}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("点击上传头像,只能上传png/jpg文件，且不超过2M")])])],1),a("el-form-item",{attrs:{label:"昵称:   "}},[a("el-input",{model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),a("el-form-item",[a("el-button",{staticStyle:{"margin-bottom":"83px"},attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)])])],1)],1)])},r=[],i=(a("053b"),a("0eaa")),n=a("46e0"),l=a("ae8c"),o=a("82ae"),u=a.n(o),c=function(t,e){return u.a.post("/api/v1/avatar",{filename:t},{params:{token:e}}).then((function(t){return t.data}))},m=a("955c"),f={name:"Details",data:function(){return{form:{id:0,nickname:"",avatar:""},imageUrl:""}},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["setUser"])),{},{fnBeforeUpload:function(t){var e="image/png"===t.type||"image/jpeg"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 PNG/JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a},fnUploadRequest:function(t){var e=this;c(t.file.name,this.$store.getters.getToken).then((function(a){if(200===a.status){var s=new XMLHttpRequest;s.open("PUT",a.data.put,!0),s.send(t.file),s.onload=function(){e.imageUrl=a.data.get,e.form.avatar=a.data.key}}else 20001===a.status?e.loginExpired(a.msg):e.notifyError("上传失败",a.msg)})).catch((function(t){e.notifyError("修改失败",t)}))},save:function(){var t=this;m["e"](this.form,this.$store.getters.getToken).then((function(e){if(200===e.status){var a=JSON.stringify(e.data);localStorage.setItem("user",a),t.setUser(e.data),t.notifySucceed("修改成功"),t.$router.push({name:"Center"})}else 20001===e.status?t.loginExpired(e.msg):t.notifyError("修改失败",e.msg)})).catch((function(e){t.notifyError("修改失败",e)}))}}),beforeMount:function(){this.form.id=this.$store.getters.getUser.id,this.form.nickname=this.$store.getters.getUser.nickname,this.imageUrl=this.$store.getters.getUser.avatar},components:{CenterMenu:n["a"]}},d=f,p=(a("eb41"),a("4023")),v=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=v.exports},d441:function(t,e,a){},eb41:function(t,e,a){"use strict";var s=a("34b8"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-2a1ebddc.90d2e168.js.map