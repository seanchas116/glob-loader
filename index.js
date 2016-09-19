"use strict";

var glob = require("glob");
var path = require("path");

module.exports = function (content, sourceMap) {
  var resourceDir = path.dirname(this.resourcePath);
  var pattern = content.trim();
  var files = glob.sync(pattern, {
    cwd: resourceDir
  });

  if (!files.length) {
    this.emitWarning('Did not find anything for glob "' + pattern + '" in directory "' + resourceDir + '"');
  }

  return "module.exports = {" + files.map(function (file) {
    var absFile = path.resolve(resourceDir, file);
    this.addDependency(absFile);
    return JSON.stringify(file) + ": require(" + JSON.stringify(absFile) + ")"
  }.bind(this)).join(",\n") + "\n};"
};
