var http = require('http');
var yakbak = require('yakbak');

http.createServer(yakbak('https://crates.io', {
    dirname: __dirname + '/tapes/crates'
})).listen(3000);

http.createServer(yakbak('https://api.travis-ci.org', {
  dirname: __dirname + '/tapes/travis'
})).listen(3001);
