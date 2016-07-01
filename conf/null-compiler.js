// Prevent Mocha from compiling class
function noop() {
  return null
}

require.extensions['.jpg'] = noop
require.extensions['.css'] = noop
require.extensions['.png'] = noop
require.extensions['.gif'] = noop
require.extensions['.json'] = noop
require.extensions['.txt'] = noop
