"use strict";

let superString = require('../SuperString');

let str = "techmaster viet nam";
console.log("\nString input equal: ", str);

console.log('\n+invert: ', superString.invert(str));
console.log('\n+camelCase: ', superString.camelCase(str));
console.log('\n+longestWord: ', superString.longestWord(str));