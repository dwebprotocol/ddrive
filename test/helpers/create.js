var ram = require('random-access-memory')
var DDrive = require('../../')

module.exports = function (key, opts) {
  if (key && !(key instanceof Buffer)) {
    opts = key
    key = null
  }
  return new DDrive((opts && opts.basestore) || ram, key, opts)
}
