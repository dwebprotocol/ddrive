const raf = require('random-access-file')
const Basestore = require('basestorevault')

module.exports = function defaultBasestore (storage, opts) {
  if (isCorestore(storage)) return storage
  if (typeof storage === 'function') {
    var factory = path => storage(path)
  } else if (typeof storage === 'string') {
    factory = path => raf(storage + '/' + path)
  }
  return new Basestore(factory, opts)
}

function isCorestore (storage) {
  return storage.default && storage.get && storage.replicate && storage.close
}
