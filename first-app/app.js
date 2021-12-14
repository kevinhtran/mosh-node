const fs = require('fs');
const path = require('path');

const utility = (files) => {
  return files.filter((file) =>
    path.parse(`${__dirname}/pages/${file}`).ext === '.js' ? true : false
  );
};

fs.readdir('./pages', (err, files) => {
  if (err) console.log('error');
  else {
    console.log(utility(files));
  }
});
