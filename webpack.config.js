const path = require('path');
let name = "app";
module.exports={
  entry:`./src/${name}.js`,
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"app.bundle.js"
  }
}
