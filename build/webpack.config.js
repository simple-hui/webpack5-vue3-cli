const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../src/main.js'), //入口 
    output: {
        path: path.join(__dirname ,'../dist'),
        filename: './js/[name].[chunkhash].js',
        publicPath: './'
    }
}