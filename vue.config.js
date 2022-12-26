const path = require("path");
const { defineConfig } = require("@vue/cli-service");

/**
 * 引入gzip压缩插件
 */
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = defineConfig({
  publicPath: "./", // 设置打包路径
  transpileDependencies: true, // 依赖包-支持语法兼容
  productionSourceMap: false, //去除vue打包后js目录下生成的.map文件，用于加速生产环境构建
  pages: {
    index: {
      entry: "src/main.ts", // 入口文件
      title: "软件开发技术分享", // 页面title
    },
  },
  // 该对象将会被webpack-merge合并为webpack配置。
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.plugins.push(
        new CompressionPlugin({
          // gzip压缩配置
          test: /\.js$|\.html$|\.css/, // 匹配文件名
          threshold: 10240, // 对超过10kb的数据进行压缩
          deleteOriginalAssets: false, // 是否删除原文件
        })
      );
    } else {
      // 为开发环境修改配置
    }
  },
  // 插件配置
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 引入less 全局变量路径
        path.resolve(__dirname, "./src/assets/css/index.less"),
      ],
    },
  },
  // 修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  // chainWebpack: (config) => {
  //   config.plugin("html").tap((args) => {
  //     args[0].title = setting.title;
  //     return args;
  //   });
  // },
  devServer: {
    // proxy: {},
    // 此处开启 https
    https: true,
  },

  // build: {}, 打包配置
});
