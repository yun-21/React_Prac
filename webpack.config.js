const path = require('path');
let name = "app";
module.exports={
  entry:`./src/${name}.ts`,
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:`${name}.bundle.js`
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:"ts-loader",
        exclude:/node_modules/
      },
      {
        test:/\.js$/,
        use:"babel-loader",
        exclude:/node_modules/
      }
    ],
  },
  resolve:{
    extensions: [".ts",".js"]
  }
}
