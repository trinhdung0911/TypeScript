define(["require", "exports", "decl", "lib/foo/a", "lib/bar/a"], function (require, exports, mod, x, y) {
    "use strict";
    x.hello();
    y.hello();
    var str = mod.call();
    if (str !== "success") {
        fail();
    }
});
