var lib = require("./lib.js");

for (var key in lib) {
  console.log(key);
  for (var size = 0; size <= 1000000; size += 100000) {
    var start_time = Date.now() / 1000;
    var result = lib[key](size);
    var end_time = Date.now() / 1000;
    var total_time = end_time - start_time;
    console.log(result, size, total_time.toFixed(3) + "s");
  };
};
