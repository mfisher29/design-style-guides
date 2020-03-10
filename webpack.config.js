var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: `${__dirname}/app/index.js`,
    module: {
        rules: [
        { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: `babel-loader` 
        },
        {
            test: /\.css$/,
            use: [`style-loader`, `css-loader`]
        }]
    },
    output: {
        path: `${__dirname}/build`,
        filename: `transformed.js`
    },
    plugins: [HtmlWebpackPluginConfig]
};