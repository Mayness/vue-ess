# vue_ess

> A Vue.js project

## Build Setup

``` bash
# 安装依赖项
npm install

# 开发环境  localhost:8888
npm run dev

# 生产环境文件生成
npm run build
```

## 开发工具系统
Vue.js          项目核心
Vuex            Vue状态管理工具，用于组件数据之间的交互
Vue-cli         Vue 项目脚手架。一键安装 vue 全家桶的工具。
Webpack         项目打包以及编辑工具
nodejs          前端开发环境。
npm             前端包管理器。
axios           ajax接口请求工具。
elementui       基于 vue 的后台组件库。
Sass            可编译成css 文件

## 项目结构
|-- build                 编译配置文件
	|-- build.js		    打包主要运行文件
	|-- check-versions.js    检测node和npm版本
	|-- utils.js			   	公共配置文件
	|-- vue-loader.conf.js   切换生产环境和开发环境
	|-- webpack.base.conf.js  webpack基础配置
	|-- webpack.dev.conf.js   webpack 开发环境配置
	|-- webpack.prod.conf.js  webpack 生产环境配置
|-- config						项目基本设置
	|-- dev.env.js				开发配置文件
	|-- index.js				配置主文件（可配置端口路径，开关功能模块等）
	|-- pro.env.js				生产配置文件
|-- dist					生产环境下最终生成的文件，在没有打包的时候是没有这个文件
	|-- static					存放打包后的静态文件，包括css、js等
	|-- Index.html				项目主页面
|-- node_modules				项目依赖包文件夹
|-- src						前端开发主要编辑文件夹
	|-- api					配置axios，处理ajax异步交互
	|-- asserts				开发环境下的静态资源
	|-- components			组件目录
		|-- 各个页面的组件
		|-- common			公共组件
	|-- config					项目静态配置资源，用于存放json、数组。
	|-- page					存放每个页面
	|-- router					路由配置文件夹
		| -- index.js			主要路由
		| -- childRouter.js		子路由
	|-- store					vuex状态管理文件夹。
		|-- index.js			交互操作
	|-- style					scss样式存放目录
		|-- base				基础样式存放目录
			|-- _base.scss		基础样式文件
			|-- _color.scss		项目颜色配置文件
			|-- _mixin.scss		scss混入文件
			|-- _reset.scss		浏览器初始化文件
		|-- scss				用于存放每个页面的样式文件
			|-- index.scss		首页样式文件
		|-- style.scss			主样式文件
	|--utils					公共JS
		|-- index.js			常用工具文件
	|-- App.vue				App入口文件
	|-- main.js				JS 入口配置文件
|-- static						存放静态资源的文件，例如（jq,图片,字体等）
|-- .babelrc					babel配置文件（主要是将ES6、7转化成ES5）
|-- .editorconfig				定义代码格式
|-- .eslintignore				代码检查忽略文件夹设置
|-- .eslintc.js					代码检查配置文件
|-- .gitignore					git提交忽略文件
|-- .postcssrc.js				痛JS插件来转换css（例如css兼容插件）
|-- index.html					项目入口文件
|-- package-lock.json			指定依赖项中的版本，优化性能
|-- package.json				项目依赖包配置文件
|-- README.md				项目说明文档
