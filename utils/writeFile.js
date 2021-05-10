const fs = require("fs");

module.exports = {
  writeFile: function (filename, data) {
    fs.writeFile(filename, data, (err) => {
      err ? console.log(err) : console.log("success");
    });
  },
};
