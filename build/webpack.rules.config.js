rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        }
    },
    {
        test: /\(css | less)$/,
        use: [
            'style-loader',
            'css-loader',
            'less-loader'
        ]
    },
    {
        test: /\.(png|jpg|svg|gif)/,
        type: 'assets/resource',
        generator: {
            filename: 'assets/[hash:8].[name][ext]' // ext test内 自带.的
        }
    }
]