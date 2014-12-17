var fs = require('fs');

fs.readFile(process.argv[2], function (error, data){
  if (error) {
    throw error;
  }
  var content = data.toString();
  var numLines = content.split('\n').length - 1;
  console.log(numLines);
});
