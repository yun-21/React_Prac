const path = require('path');
let name = "app";
module.exports={
  entry:`./src/${name}.tsx`,
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:`${name}.bundle.js`
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:"babel-loader",
        exclude:/node_modules/
      },
      {
        test:/\.(ts|tsx)$/,
        use:"ts-loader",
        exclude:/node_modules/
      }
    ],
  },
  resolve:{
    extensions: [".ts",".js",".tsx",".jsx"]
  }
}
