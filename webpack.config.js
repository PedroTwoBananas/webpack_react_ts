const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
   mode = 'production'
}

const plugins = [
   new HtmlWebpackPlugin({
      template: './src/index.html',
   }),
]

module.exports = {
   mode,

   plugins,

   entry: './src/index.tsx',

   devtool: 'inline-source-map',

   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },

   output: {
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
   },

   devServer: {
      hot: true,
   },

   resolve: {
      extensions: ['.ts', '.tsx', '.js'],
   },

   module: {
      rules: [
         { test: /\.(html)$/, use: ['html-loader'] },
         { test: /\.tsx?$/, loader: 'ts-loader' },
         {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(png|jpe?g|webp|git|svg|)$/i,
            use: [
               {
                  loader: 'img-optimize-loader',
               },
            ],
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
      ],
   },
}
