var test = require("tap").test;
require("./sample/bundle");

test("glob-loader", function (t) {
  t.similar(global.loaded, ["a", "b"]);
  t.end()
});
