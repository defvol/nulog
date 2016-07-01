var Writable = require('stream').Writable;
var devNull = new Writable();
devNull._write = function () {};

/**
 * Create Console object with custom outstream
 * @param {bool} toggle - whether to show or hide the console output
 * @param {object} options - additional and optional configuration
 * @return {object} console.Console
 */
module.exports = function verbo (toggle, options) {
  options = options || {};
  var outstream = toggle ? (options.output || process.stdout) : devNull;
  return new console.Console(outstream);
}
