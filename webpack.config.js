const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    'index.ios': ['./ios/src/main.ios.js'],
    'index.android': ['./android/src/main.android.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    fallback: '/usr/local/lib/node_modules',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'], // 'babel-loader' is also a legal name to reference
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'postcss', 'sass?&sourceMap&includePaths[]=./src/asset/style'],
    },
    {
      test: /\.(gif|png)$/,
      loaders: ['url?limit=8192&name=asset/img/[hash].[ext]'],
    },
    {
      test: /\.json$/,
      loaders: ['json'],
    }],
  },
  postcss() {
    return [autoprefixer({ browsers: ['Safari > 1'] })];
  },
  plugins: [],
};
