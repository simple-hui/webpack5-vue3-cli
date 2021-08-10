const { webpack } = require('webpack');

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

plugin: [
    new webpack.DefinePlugin({
        'process.env': {
            ...env
        }
    })
]