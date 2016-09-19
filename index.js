"use strict";

var glob = require("glob");
var path = require("path");

module.exports = function (content, sourceMap) {
  this.cacheable && this.cacheable();
  var resourceDir = path.dirname(this.resourcePath);
  var pattern = content.trim();
  var files = glob.sync(pattern, {
    cwd: resourceDir
  });

  if (!files.length) {
    this.emitWarning('Did not find anything for glob "' + pattern + '" in directory "' + resourceDir + '"');
  }

  return "module.exports = [\n" + files.map(function (file) {
    return "  require(" + JSON.stringify(file) + ")"
  }).join(",\n") + "\n];"
};
