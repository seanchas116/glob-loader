"use strict";

var glob = require("glob");
var path = require("path");

module.exports = function (content, sourceMap) {
  var resourceDir = path.dirname(this.resourcePath);
  var files = glob.sync(content.trim(), {
    cwd: resourceDir
  });

  return "module.exports = [\n" + files.map(function (file) {
    return "  require(" + JSON.stringify(file) + ")"
  }).join(",\n") + "\n];"
};
