const { webpack } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('core-js/fn/promise');

const envMode = process.env.envMode;
// 引入dotenv 并且配置envMode
require('dotenv').config({ path: `.env${envMode}` });
// 使用正则匹配 VUE_APP_ 开头的变量
const prefixREG = /^VUE_APP_/
let env = {};
// 将只有 NODE_ENV 、 BASE_URL 和开头为 VUE_APP_ 的变量引入到webpack.DefinePlugin 嵌入到客户端内
for ( const key in process.env ) {
    if ( key === 'NODE_ENV' || key === 'BASE_URL' || prefixREG.text(key) ) {
        env[key] = JSON.stringify(process.env[key]);
    }
}

module.exports = {
    resolve: {
        alias: {
            "@": path.join(__dirname, '../src'),
            "assets": path.join(__dirname, '../src/assets')
        }
    },
    plugin: [
        new webpack.DefinePlugin({
            'process.env': {
                ...env
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html',
            title: 'webpack5+vue3',
            minify: {
                html5: true, // 根据html5 规范解析输入
                collapseWhitespace: true, // 折叠空白区域
                preserveLineBreaks: false, // 保留换行符
                minifyCSS: true, // 压缩css
                minifyJS: true, // 压缩Js
                removeComments: true //移除注释
            }
        })
    ]

}