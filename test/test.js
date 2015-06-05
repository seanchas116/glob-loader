var test = require("tap").test;
require("./sample/bundle");

test("glob-loader", function (t) {
  t.ok(global.loaded = ["a", "b"]);
});
