var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            // apiUrl: 'http://localhost:3000/v1'
            apiUrl: 'https://api.selfcodehero.com/v1'
        })
    }
}