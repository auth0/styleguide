/* Configure Mocha test runner, see package.json/scripts/test */

process.env.NODE_ENV = "test";

function noop() {
  return null;
}

require.extensions[".styl"] = noop;
