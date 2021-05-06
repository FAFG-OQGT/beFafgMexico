const fs = require("fs");
 
const getFileFromPath = (path) => {
  var fs = require("fs");
  var stringData = fs.readFileSync(path, "utf8");
  return stringData;
};

module.exports = {
  getFileFromPath,
};
