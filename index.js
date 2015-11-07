"use strict";

var loaderUtils = require("loader-utils");
var glob = require("glob");
var path = require("path");

module.exports = function (content, sourceMap) {
  // var query = loaderUtils.parseQuery(this.query);
  var resourceDir = path.dirname(this.resourcePath);
  var files = glob.sync(content.trim(), {
    cwd: resourceDir
  });

  return "module.exports = [\n" + files.map(function (file) {
    return "  require(" + JSON.stringify(file) + ")"
  }).join(",\n") + "\n];"
};
