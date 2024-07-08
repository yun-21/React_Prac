const path = require('path');
module.exports={
  entry:"./src/app.ts",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"add.bundle.js"
  },
  mode:'development',
  module:{
    rules:[{
      test:/\.ts$/,
      use:'ts-loader',
      exclude: /node-modules/
    }]
  },
  resolve:{
    extensions:[".ts",".js"]
  }
}