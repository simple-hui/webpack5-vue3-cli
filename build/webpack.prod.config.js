const copyWebpackPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extrace-plugin');
const path = require('path');


module.exports = {
    
    plugins: [
        new copyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, "../public"),
                to: './',
                globOptions: {
                    dot: true,
                    gitignore: true,
                    ignore: ["**/index.html*"],
                }
            }]
        }),
        new miniCssExtractPlugin({
            filename: "./css/[name].[contenthash].css",
            chunkFilename: './css[id].[contenthash].css',
        })
    ],
    output: {
        clean: true //webpack 在5.2后版本新增属性 用于清除dist文件
    }
}