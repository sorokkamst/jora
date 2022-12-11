const path = require('path');

module.exports = {
    entry: './source/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/js'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: 'source-map',
    watch: true,
};
