# FoodMe App — a workshop app built with AngularJS

[原英文介绍](https://github.com/IgorMinar/foodme)

## 项目说明

项目fork于[IgorMinar/foodme](https://github.com/IgorMinar/foodme), 一个基于Angular和Nodejs的订餐应用.

项目四年前搭建, 时间较久, 对代码做了一些修改:
* 修改package.json中的express的依赖版本为3.0.0, 使之项目可以正常运行.
* app/lib新增Angular1.2.7版本, 并将项目的代码升级.
* app/lib下增加NEJ的define.js
* 新增app/deploy目录, 加入NEJ的打包工具
* 将app/index.html移动至app/template/tpl, 方便打包
* 整个项目使用define.js管理模块依赖. script引入angular相关库.

## 项目运行

安装Nodejs, 然后运行`npm install && cd server && node start`, 也可以`在npm install`之后到app/scripts目录双击`web-server.bat`运行项目. 访问: [http://localhost:3000/template/](http://localhost:3000/template/)

NEJ打包, 运行`npm install -g nej && cd depoy && nej build`. 访问: [http://localhost:3000/tpl/](http://localhost:3000/tpl/)

## TODO

### ng-annotate

有时候打包后会出现"unknown provider: ePrivider - e" 这种错误, 一般由于代码里没有写明依赖引起的.

```js
angular.module('app', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        // magic code
    });
```

像上面, 直接运行没问题, 打包后就会出现问题, 需要这样写:

```js
angular.module('app', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider) {
        // magic code
    }])
```

ng-annotate可以解决[ng-annotate](https://github.com/olov/ng-annotate). 但当前没有找到好的方式与NEJ打包工具集成, 由于有插件, 集成到gulp倒是很简单.

### templateCache

Angular读取模板时, 第一次需要通过Ajax获取, 之后会缓存至templateCache中,为了更好的性能和速度, 建议生产环境中提前将模板缓存至js中, 减少请求. 同样有gulp的插件[gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache).


