var test = require('tape');
var verbo = require('../lib/index');
var Writable = require('stream').Writable;

test('verbo', function (t) {
  t.plan(1);

  var ws = Writable();
  var msg = 'a message is logged'

  ws._write = function (chunk, _, next) {
    var want = msg + '\n';
    t.equal(chunk.toString(), want, 'a message is logged');
    next();
  };

  var logger = verbo(true, { output: ws });
  logger.log(msg);

  logger = verbo(true);
  logger.log('you should see this message in the terminal');

  logger = verbo(false);
  logger.log('will not see this message in the terminal');
});
