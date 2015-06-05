"use strict";

var path = require("path");

var globLoaderPath = path.resolve(__dirname, "../../index.js");

module.exports = {
  entry: __dirname + "/index.js",
  output: {
    path: __dirname,
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.pattern$/,
        loader: globLoaderPath
      }
    ]
  }
};
