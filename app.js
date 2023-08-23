
const test = require("lodash")

const items = [1,2,[3],[[4]]]

const newitems = test.flattenDeep(items)

console.log(newitems)