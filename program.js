var fileFilter = require('./file_filter');

fileFilter(process.argv[2], process.argv[3], function(error, files) {
  if (error) {
    return console.error('Error occurred', error);
  }

  files.forEach(function (file) {
    console.log(file);
  })
});
