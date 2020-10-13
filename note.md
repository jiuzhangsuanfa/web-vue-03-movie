# 电影项目

## 

基本环境搭建
-----------------------------------

1. 安装Vue脚手架： npm i -g @vue/cli
2. 创建项目：vue create PROJECT
3. 配置Vue特征：空格键选择（我选择：Babel转换器, Router -- 通过空格键选择，enter键确认）
4. 进入项目：cd PROJECT 回车
5. 运行：npm run serve





##安装必要包

1. 安装axios
   npm i axios -S
2. 安装vue-router
   npm i vue-router --S
3. 安装less
   npm i less less-loader -D





## 启用Vant UI

###安装

```
# 通过 npm 安装
npm i vant -S

# 通过 yarn 安装
yarn add vant
```

###使用

1. 自动按需加载（推荐）

   ```javascript
   # 安装插件
   npm i babel-plugin-import -D
   
   // 在.babelrc 中添加配置
   // 注意：webpack 1 无需设置 libraryDirectory
   {
     "plugins": [
       ["import", {
         "libraryName": "vant",
         "libraryDirectory": "es",
         "style": true
       }]
     ]
   }
   
   // 对于使用 babel7 的用户，可以在 babel.config.js 中配置
   module.exports = {
     plugins: [
       ['import', {
         libraryName: 'vant',
         libraryDirectory: 'es',
         style: true
       }, 'vant']
     ]
   };
   
   // 接着你可以在代码中直接引入 Vant 组件
   // 插件会自动将代码转化为方式二中的按需引入形式
   import { Button } from 'vant';
   ```

   

2. 手动按需加载

   ```
   在不使用插件的情况下，可以手动引入需要的组件
   
   import Button from 'vant/lib/button';
   import 'vant/lib/button/style';
   ```

   

3. 导入所有组件

   Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

   ```
   import Vue from 'vue';
   import Vant from 'vant';
   import 'vant/lib/index.css';
   
   Vue.use(Vant);
   ```

   > 配置按需引入后，将不允许直接导入所有组件



4. 通过CDN引入

   使用 Vant 最简单的方法是直接在 html 文件中引入 CDN 链接，之后可以通过全局变量`vant`访问到所有组件。

   ```html
   <!-- 引入样式文件 -->
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/vant@2.8/lib/index.css"
   />
   
   <!-- 引入 Vue 和 Vant 的 JS 文件 -->
   <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/vant@2.8/lib/vant.min.js"></script>
   
   <script>
     // 在 #app 标签下渲染一个按钮组件
     new Vue({
       el: '#app',
       template: `<van-button>按钮</van-button>`,
     });
   
     // 调用函数组件，弹出一个 Toast
     vant.Toast('提示');
   
     // 通过 CDN 引入时不会自动注册 Lazyload 组件
     // 可以通过下面的方式手动注册
     Vue.use(vant.Lazyload);
   </script>
   ```

   









## 跨域问题

1. 在项目目录下添加vue.config.js

```javascript
module.exports = {
      // 在proxyTable里边进行配置
    devServer:{
      proxy:{
        '/api': {
          target: "http://api.douban.com/v2/movie", //目标服务器
          changeOrigin:true, // 是否改变请求源
          pathRewrite:{ // 路径重写
            "^/api":''
          }
        }
      }
    }
}
```



2. 设置axios代理前缀

```javascript
import axios from 'axios'

// 创建axios实例
const service = axios.create({
    withCredentials: true,
    baseURL: '/api',  // 代理前缀！！！！！！！！
    timeout: 15000 
})
```

3. 重新运行项目，跨域问题解决



## 图片加载的403问题



解决方法：在头部添加meta标签，不发送HTTP Referer首部 

```html
<meta name="referrer" content="no-referrer">
```





