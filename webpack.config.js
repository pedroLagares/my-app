const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js', // Arquivo de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída para o código compilado
    filename: 'bundle.js', // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
