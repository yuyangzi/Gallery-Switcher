let webpack = require("webpack");
//处理HTML文件
let htmlwebpackPlugin = require("html-webpack-plugin");
//处理css文件
let css = require("css-loader");
let style = require("style-loader");
//压缩js文件
let uglify = require("uglifyjs-webpack-plugin");
//css后处理器
let postcss = require("postcss-loader");
//添加浏览器前缀
let autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "js/_main.js",
    },
    module: {
        rules: [
            //处理CSS文件
            {
                test: /\.css$/, use: [
                {loader: "style-loader"},
                {loader: "css-loader", options: {importLoaders: 1}},
                {loader: "postcss-loader", options: {plugins:(loader) => [
                    require("autoprefixer")({
                        broswers:['last 5 versions'],
                    }),
                ]}}
            ]
            },
            //处理图片文件
            {
                test: /\.(png|jpg|gif)$/, use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                    }
                }
            ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlwebpackPlugin({
            title: "Gallery Switcher",
            filename: "./index.html",
            template: "./src/index.html",
            inject: "body",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            }
        }),

        new uglify({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),

        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:function(){
                    return [
                        require('autoprefixer')({
                            broswers:['last 5 versions']
                        })
                    ]
                }
            }
        })



    ]
};