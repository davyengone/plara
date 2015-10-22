var babel = require('babel');

module.exports = function (wallaby) {
  return {
    files: [
      'lib/*.js'
    ],

    tests: [
      'test/*spec.js'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        stage: 0,
        optional: ['es7.comprehensions', 'runtime']
      })
    }
  };
};
