module.exports = function (dirname, extn, callback) {
  var fs = require('fs');
  var path = require('path');

  var filter = "." + extn;

  fs.readdir(dirname, function (error, files){
    if (error) {
      return callback(error, []);
    }
    var filteredFiles = files.filter(function(file) {
      return path.extname(file) === filter
    })

    callback(error, filteredFiles);

  });
}
