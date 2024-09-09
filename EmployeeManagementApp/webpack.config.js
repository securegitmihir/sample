const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        index: './wwwroot/js/index.js',
        privacy: './wwwroot/js/index.js',
        bootstrap:
            [
                './node_modules/bootstrap/dist/css/bootstrap.min.css',
                './node_modules/bootstrap/dist/js/bootstrap.min.js'
            ],
        devextreme: [
            "./node_modules/devextreme-dist/js/dx.all.js",
            "./node_modules/devextreme-dist/js/dx.aspnet.mvc.js",
            "./node_modules/devextreme-aspnet-data/js/dx.aspnet.data.js",
            "./node_modules/devextreme/dist/css/dx.light.css"
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: `${__dirname}/wwwroot/bundle`,
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Process JavaScript files
                //exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // Transpile JavaScript for wide compatibility
                    }
                }
            },
            {
                test: /\.css$/, // Process CSS files
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into separate files
                    'css-loader' // Load CSS into JavaScript
                ]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery', // Automatically provide jQuery as `$`
            jQuery: 'jquery', // Automatically provide jQuery as `jQuery`
            Popper: ['@popperjs/core', 'default'] // Automatically provide Popper.js
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css' // CSS output filenames
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
        ],
        usedExports: true,
    },
    mode: 'production',
};