const presets = [
    [
      "@babel/env",
      {
        targets: { // 配支持的环境
          "browsers": [ // 浏览器
            "last 2 versions",
            "safari >= 7"
          ],
          "node" : "current",
        },
        "modules": "auto",  //设置ES6 模块转译的模块格式 默认是 commonjs
        "debug": true, // debug，编译的时候 console
        useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };