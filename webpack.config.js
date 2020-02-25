const path = require('path');
console.log(path.join(__dirname,'public'));
console.log(__dirname);
module.exports = {
    entry : ['babel-polyfill','./src/app.js'],
    output : {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
//
module: {
        rules: [{
                loader: 'babel-loader',
                test: /\.js$/,  
                exclude: /node_modules/
},{
    test:/\.s?css$/,
    use: ['style-loader',
    'css-loader',
    'sass-loader'
]
    }]
},
devtool: 'cheap-module-eval-source-map',
devServer: {contentBase: path.join(__dirname,'public')
            }
//
};


//Users/pol/Documents/react-course-projects/Indecision-app