let http = require('http');
let yakbak = require('yakbak');

let noRecord = process.env.NO_RECORD;

http.createServer(yakbak('https://crates.io', {
  dirname: __dirname + '/tapes/crates',
  noRecord
})).listen(3000);

http.createServer(yakbak('https://api.travis-ci.org', {
  dirname: __dirname + '/tapes/travis',
  noRecord
})).listen(3001);
