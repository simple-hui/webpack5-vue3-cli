const presets = [
    [{
        "@babel-preset-env": {
            "useBuiltIns": 'usage', // 配置的usage会根据配置的浏览器兼容，以及代码中的api进行polyfill（打补丁）， 实现按需添加
            "corejs": "7.15.0"
        }
    }]
]

const plugins = [

]

module.exports = {
    presets,
    plugins
}