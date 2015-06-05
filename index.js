"use strict";

var loaderUtils = require("loader-utils");
var glob = require("glob");
var path = require("path");

module.exports = function (content, sourceMap) {
  // var query = loaderUtils.parseQuery(this.query);
  var files = glob.sync(content.trim());

  return files.map(function (file) {
    var relativePath = path.relative(process.cwd(), file);
    return "require(" + JSON.stringify(file) + ");";
  }).join("\n");
};
