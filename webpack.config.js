/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-13T20:15:58+01:00
 * @Email:  andreeray@live.com
 * @Filename: webpack.config.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-15T18:01:51+01:00
 */
const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
    entry: "./src/root.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: 'bundle.js'
    },

    watch: true,

    devServer: {
        inline: true
    },

    module: {
        rules: [
            {
              test: /\.js$/,
              use: [{
                loader: 'babel-loader',
                options: {
                  "presets": [ [ "env" ] ],
                  "plugins": [ "transform-es2015-destructuring", "transform-object-rest-spread", "transform-runtime" ]
                }
              }],
              exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                loaders: {
                  // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                  // the "scss" and "sass" values for the lang attribute to the right configs here.
                  // other preprocessors should work out of the box, no loader config like this nessessary.
                  'scss': 'vue-style-loader!css-loader!sass-loader',
                  'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                  'js': 'babel-loader?presets[]=env'
                }
              }
            }
        ]
    },

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    },

    plugins: [
        new WriteFilePlugin()
    ],

    devtool: '#eval-source-map'
}
