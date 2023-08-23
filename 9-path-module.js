const path = require("path")
console.log(path.sep);

const filePath = path.join("/content", "folder", "text.txt")
console.log(filePath);

const baseName = path.basename(filePath)
console.log(baseName);

const absolute = path.resolve(__dirname, "content", "folder", "text.txt")
console.log(absolute)