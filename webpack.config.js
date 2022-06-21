const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/main/index.tsx'),
    // context: path.join(__dirname, './src/main/index.tsx'),
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'  
    },
    resolve: {
        extensions: ['.mjs','.ts', '.js','.jsx','.tsx'],
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 3000,
        historyApiFallback: true,
      },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader'
            }
        },
        {
          test: /\.m?js/,
          resolve: {
              fullySpecified: false
          }
        }, 
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            exclude: [/\.(js|jsx|ts|tsx|css|mjs|html|ejs|json)$/],
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/main/index.html' }),
      // new NodePolyfillPlugin(), // Polyfill Node.js globals (e.g. global, process, etc)
    ],
}
